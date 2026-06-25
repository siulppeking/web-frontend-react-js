import React from 'react'
import { PageMeta } from '../common/PageMeta'
import escudoEscap from '../assets/escudo-escap.png';

export const Register = () => {

    const teacherName = "SO2. FAP ESCOBAR QUINTANA, LUIS GUISEPPE";
    const teacherId = "178362";
    const classId = "6a3204efc1aeaa5898819f95";

    const handleRegister = () => {
        alert("Asistencia registrada correctamente");
    };

    return (
        <>
            <PageMeta
                title="Register Page - Web Frontend React JS"
                description="This is the register page of the Web Frontend React JS application."
            />
            <div className="attendance-container">
                {/* Header with Logo */}
                <header className="attendance-header">
                    <div className="attendance-logo-wrapper">
                        <img src={escudoEscap} alt="ESCAP Logo" className="attendance-logo-img" />
                        <span className="attendance-brand-title">Escuela de Capacitacion y Perfeccionamiento</span>
                    </div>
                </header>

                {/* Main Card */}
                <main className="attendance-card">
                    <p className="attendance-welcome">
                        Bienvenido docente: <strong>{teacherName} - ({teacherId})</strong>
                    </p>

                    <p className="attendance-welcome">
                        Te encuentras en la clase: <strong>{classId}</strong>
                    </p>

                    {/* Details Form / Table Layout */}
                    <div className="attendance-table">
                        <div className="attendance-row">
                            <div className="attendance-label">Curso</div>
                            <div className="attendance-value">
                                <select className="attendance-select" defaultValue="java-fundamentals">
                                    <option value="java-fundamentals">Seminario Java 17 - Fundamentals Developer</option>
                                    <option value="java-web">Seminario Java 17 - Web Development</option>
                                    <option value="java-backend">Seminario Java 17 - Backend Developer</option>
                                    <option value="java-frontend">Seminario Java 17 - Frontend Developer</option>
                                </select>
                            </div>
                        </div>

                        <div className="attendance-row">
                            <div className="attendance-label">Tipo Clase</div>
                            <div className="attendance-value">
                                <select className="attendance-select" defaultValue="theory-practice">
                                    <option value="theory">Clase Teórica</option>
                                    <option value="practice">Clase Práctica</option>
                                    <option value="theory-practice">Clase Teórica y Práctica</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="attendance-actions">
                        <button className="attendance-button" onClick={handleRegister}>
                            Registra tu asistencia
                        </button>
                    </div>
                </main>
            </div>
        </>
    )
}
