import { Link } from 'react-router-dom'
import { PageMeta } from '../common/PageMeta'

export const Index = () => {
    return (
        <>
            <PageMeta
                title="Index Page - Web Frontend React JS"
                description="This is the index page of the Web Frontend React JS application."
            />
            <div className='container'>
                <h1>Index</h1>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/course">Course</Link></li>
                </ul>

                <div className='table-responsive'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>30</td>
                                <td>john.doe@example.com</td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>25</td>
                                <td>jane.smith@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}