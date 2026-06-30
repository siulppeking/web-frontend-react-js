import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

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

            const { data } = await api.get('/auth/verify');

            setUser(data);
            setStatus('authenticated');

        } catch {

            localStorage.removeItem('accessToken');

            setUser(null);
            setStatus('unauthenticated');
        }
    };

    const login = async (email, password) => {
        try {
            clearErrors();
            setIsLoading(true);
            const { data } = await api.post(
                '/auth/login',
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
                isAuthenticated: status === 'authenticated',
                isChecking: status === 'checking',
                login,
                logout,
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