import { useState } from "react"
import { PageMeta } from "../common/PageMeta"
import axios from "axios";
import escudoEscap from '../assets/escudo-escap.png';
import { useForm } from "../hooks/useForm";
import { useAuth } from "../context/AuthContext";

export const Login = () => {

    const { login, errors, isLoading } = useAuth();

    const { email, password, handleInputChange } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <>
            <PageMeta
                title="Login Page - Web Frontend React JS"
                description="This is the login page of the Web Frontend React JS application."
            />
            <div className="login-container">
                <div className="login-card">

                    <div className="login-logo-container">
                        <img
                            src={escudoEscap}
                            alt="Logo"
                            className="login-logo"
                        />
                    </div>

                    <div className="login-header">
                        <h5>Escuela de Capacitación y Perfeccionamiento</h5>
                        <p>Asistencia Docente</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="login-field">
                            <label className="login-label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="login-input"
                                placeholder="email@esfap.edu.pe"
                                value={email}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="login-field">
                            <label className="login-label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="login-input"
                                placeholder="********"
                                value={password}
                                onChange={handleInputChange}
                                disabled={isLoading || email === ''}
                            />
                        </div>


                        {errors.length > 0 && (
                            <div className="login-error-container">
                                {errors.map((err, index) => (
                                    <p key={index} className="login-error-text">
                                        {err}
                                    </p>
                                ))}
                            </div>
                        )}

                        <button className="login-button" type="submit" disabled={isLoading || email === '' || password === ''}>
                            {isLoading ? 'Cargando...' : 'Ingresar'}
                        </button>
                    </form>

                    <p className="login-footer">© 2026 Created by <strong>@skfluxcoding</strong>. All rights reserved.</p>

                </div>
            </div>
        </>
    )
}
