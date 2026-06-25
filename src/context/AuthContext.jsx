import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

const API_URL = 'https://web-backend-7nev.onrender.com/api/auth';

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('checking');
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const normalizeErrors = (data) => {
        if (Array.isArray(data?.errors)) {
            return data.errors.map(error => error.msg);
        }
        if (typeof data?.message === 'string') {
            return [data.message];
        }
        return ['Unexpected error'];
    };

    const fetchVerify = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                setStatus('unauthenticated');
                setUser(null);
                return;
            }

            const { data } = await axios.get(`${API_URL}/verify`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setUser(data);
            setStatus('authenticated');

        } catch (error) {

            localStorage.removeItem('accessToken');

            setUser(null);
            setStatus('unauthenticated');
        }
    };

    const login = async (email, password) => {
        try {
            clearErrors();
            setIsLoading(true);
            const { data } = await axios.post(
                `${API_URL}/login`,
                { email, password }
            );

            localStorage.setItem(
                'accessToken',
                data.accessToken
            );

            await fetchVerify();

            return true;

        } catch (error) {

            if (error.response) {
                setErrors(
                    normalizeErrors(error.response.data)
                );
            } else {
                setErrors(['Network error']);
            }

            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const clearErrors = () => {
        setErrors([]);
    };

    const logout = () => {

        localStorage.removeItem('accessToken');

        setUser(null);
        clearErrors();
        setStatus('unauthenticated');
    };

    useEffect(() => {
        fetchVerify();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                status,
                errors,
                isLoading,
                login,
                logout,
                fetchVerify,
                isAuthenticated: status === 'authenticated',
                isChecking: status === 'checking'
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return context;
};