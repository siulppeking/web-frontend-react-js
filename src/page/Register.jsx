import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageMeta } from '../common/PageMeta'
import escudoEscap from '../assets/escudo-escap.png';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { useForm } from '../hooks/useForm';

export const Register = () => {

    const { user, logout, isLoading } = useAuth();
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    const { courseId, classType, handleSelectChange } = useForm({
        courseId: '',
        classType: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await api.get('/courses');
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!courseId || !classType) {
            setErrorMessage('Debes seleccionar curso y tipo de clase.');
            return;
        }

        setErrorMessage('');
        setIsSubmitting(true);

        try {

            await new Promise((resolve) => setTimeout(resolve, 500));

            const { data } = await api.post('/attendance', {
                courseId: courseId,
                classType: classType,
            });
            const { id: attendanceId } = data;

            navigate(`/register/${attendanceId}/attendance`);
        } finally {
            setIsSubmitting(false);
        }
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
                        Bienvenido docente: <strong>{user.firstname}, {user.lastname} - (178362)</strong>
                    </p>

                    <p className="attendance-welcome">
                        Te encuentras en la clase: <strong>{user.id}</strong>
                    </p>

                    {/* Details Form / Table Layout */}
                    <form onSubmit={handleSubmit}>
                        <div className="attendance-table">
                            <div className="attendance-row">
                                <div className="attendance-label">Curso</div>
                                <div className="attendance-value">
                                    <select
                                        className="attendance-select"
                                        value={courseId}
                                        onChange={handleSelectChange}
                                        name="courseId"
                                    >
                                        <option value="">- No Seleccionado -</option>
                                        {courses.map(course => (
                                            <option key={course.id} value={course.id}>
                                                {course.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="attendance-row">
                                <div className="attendance-label">Tipo Clase</div>
                                <div className="attendance-value">
                                    <select
                                        className="attendance-select"
                                        value={classType}
                                        onChange={handleSelectChange}
                                        name="classType"
                                    >
                                        <option value="">- No Seleccionado -</option>
                                        <option value="THEORY">Clase Teórica</option>
                                        <option value="PRACTICE">Clase Práctica</option>
                                        <option value="THEORY_PRACTICE">Clase Teórica y Práctica</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    {errorMessage && <p className="attendance-feedback attendance-feedback-error">{errorMessage}</p>}

                    <div className="attendance-actions attendance-actions-end">
                        <button className="attendance-button" type="button" onClick={logout} style={{ background: 'var(--danger-color)' }} disabled={isLoading}>
                            {isLoading ? 'Cerrando Sesión...' : 'Cerrar Sesión'}
                        </button>
                        <button className="attendance-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Registrando...' : 'Registra tu asistencia'}
                        </button>
                    </div>
                    </form>

                </main>
            </div>
        </>
    )
}
