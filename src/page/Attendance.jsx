import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageMeta } from '../common/PageMeta';
import escudoEscap from '../assets/escudo-escap.png';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const STUDENTS_MOCK = [
    { id: 'A-001', name: 'Ana Torres' },
    { id: 'A-002', name: 'Carlos Rivas' },
    { id: 'A-003', name: 'Luisa Sánchez' },
    { id: 'A-004', name: 'Pedro Martínez' },
    { id: 'A-005', name: 'María Paredes' },
    { id: 'A-006', name: 'Diego León' },
    { id: 'A-007', name: 'José Campos' },
    { id: 'A-008', name: 'Valeria López' },
    { id: 'A-009', name: 'Miguel Acosta' },
    { id: 'A-010', name: 'Rosa Quispe' },
    { id: 'A-011', name: 'Javier Mena' },
    { id: 'A-012', name: 'Carla Dávila' },
    { id: 'A-013', name: 'Fernando Ponce' },
    { id: 'A-014', name: 'Elena Velásquez' },
    { id: 'A-015', name: 'Tomás Salazar' },
    { id: 'A-016', name: 'Paola Alvarado' },
    { id: 'A-017', name: 'Renzo Medina' },
    { id: 'A-018', name: 'Diana Figueroa' },
    { id: 'A-019', name: 'Sebastián Vera' },
    { id: 'A-020', name: 'Claudia Núñez' },
];

const getAttendanceListStorageKey = ({ attendanceId }) => `attendance-list:${attendanceId}`;

export const Attendance = () => {
    const { user } = useAuth();
    const { attendanceId } = useParams();

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!user?.id || !attendanceId) {
            setErrorMessage('No se pudo cargar la asistencia. Falta el identificador.');
            setIsLoading(false);
            return;
        }

        const loadAttendanceList = async () => {
            setIsLoading(true);
            setErrorMessage('');

            try {
                await new Promise((resolve) => setTimeout(resolve, 750));
                const response = await api.get(`/attendance/${attendanceId}`);

                const { details } = response.data;

                setStudents(details);

            } catch {
                setErrorMessage('Ocurrió un error cargando la lista de alumnos.');
            } finally {
                setIsLoading(false);
            }
        };

        loadAttendanceList();
    }, [attendanceId, user?.id]);

    const togglePresent = async (studentId) => {
        setStudents((prev) => prev.map((student) => (

            student.studentId._id === studentId
                ? { ...student, studentId: { ...student.studentId }, present: !student.present }
                : student
        )));

        const response = await api.post('/attendance-details', {
            attendanceId,
            studentId,
            present: !students.find((s) => s.studentId._id === studentId)?.present,
        });
    };

    const handleSaveAttendance = async () => {
        if (!user?.id || !attendanceId) {
            setErrorMessage('No se puede guardar sin identificador de asistencia.');
            return;
        }

        setIsSaving(true);
        setErrorMessage('');
        setMessage('');

        try {
            await new Promise((resolve) => setTimeout(resolve, 750));

            setMessage('Asistencia guardada correctamente.');
            navigate('/register'); // Redirect to dashboard after saving
        } catch {
            setErrorMessage('No se pudo guardar la asistencia.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <>
            <PageMeta
                title="Página de Asistencia - Asistencia Docente"
                description="Página de asistencia para la aplicación de asistencia docente. Registre la asistencia de los alumnos."
            />

            <div className="attendance-container">
                <header className="attendance-header">
                    <div className="attendance-logo-wrapper">
                        <img src={escudoEscap} alt="ESCAP Logo" className="attendance-logo-img" />
                        <span className="attendance-brand-title">Escuela de Capacitacion y Perfeccionamiento</span>
                    </div>
                </header>

                <main className="attendance-card">

                    {errorMessage && <p className="attendance-feedback attendance-feedback-error">{errorMessage}</p>}
                    {message && <p className="attendance-feedback attendance-feedback-success">{message}</p>}

                    {isLoading ? (
                        <p className="attendance-welcome">Cargando lista de alumnos...</p>
                    ) : (
                        <div className="attendance-student-list">
                            <div className="attendance-student-header">
                                <span>N°</span>
                                <span>NSA</span>
                                <span>Nombres</span>
                                <span>Presente</span>
                            </div>

                            {students.map((student, index) => (
                                <div key={student._id} className="attendance-student-row">
                                    <span>{index + 1}</span>
                                    <span>{student.studentId.code}</span>
                                    <span>{student.studentId.name}</span>
                                    <label className="attendance-switch">
                                        <input
                                            type="checkbox"
                                            checked={student.present}
                                            onChange={() => togglePresent(student.studentId._id)}
                                        />
                                        <span className="attendance-switch-slider"></span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="attendance-actions">
                        <button
                            className="attendance-button"
                            type="button"
                            onClick={handleSaveAttendance}
                            disabled={isSaving || isLoading}
                        >
                            {isSaving ? 'Guardando...' : 'Guardar asistencia'}
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
};
