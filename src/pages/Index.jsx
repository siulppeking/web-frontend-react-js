import React from 'react'
import { Link } from 'react-router-dom'

export const Index = () => {
    return (
        <div className='container'> 
            <h1>Index</h1>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/course">Course</Link></li>
            </ul>
        </div>
    )
}
