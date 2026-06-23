import { useState } from "react"
import { PageMeta } from "../common/PageMeta"

export const Login = () => {

    const [loginRequest, setLoginRequest] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://web-backend-7nev.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            },
            body: JSON.stringify(loginRequest)
        });

        if (!response.ok) {
            console.error('Login failed');
            return;
        }

        const data = await response.json();
        console.log('Login successful:', data);
    }


    return (
        <>
            <PageMeta
                title="Login Page - Web Frontend React JS"
                description="This is the login page of the Web Frontend React JS application."
            />
            <div className="login-container">
                <div className="login-card">
                    <h2>Login</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder="demo@example.com"
                                name="email"
                                value={loginRequest.username}
                                onChange={(e) => setLoginRequest({...loginRequest, username: e.target.value})}
                            />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="********"
                                name="password"
                                value={loginRequest.password}
                                onChange={(e) => setLoginRequest({...loginRequest, password: e.target.value})}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
