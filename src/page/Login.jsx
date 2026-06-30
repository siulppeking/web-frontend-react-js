import { PageMeta } from "../common/PageMeta"
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import escudo from '../assets/escudo-escap.png';

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
                title="Pagina de Inicio de Sesión - Asistencia Docente"
                description="Página de inicio de sesión para la aplicación de asistencia docente. Ingrese su correo electrónico y contraseña para acceder a su cuenta."
            />
            <div className="login-container">
                <div className="login-card">

                    <div className="login-logo-container">
                        <img src={escudo} alt="Logo" className="login-logo" />
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

                    <p className="login-footer">© 2026 Created by @skfluxcoding. All rights reserved.</p>

                </div>
            </div>
        </>
    )
}
