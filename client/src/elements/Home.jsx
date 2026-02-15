import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
    //win bsh nstory students
    const [data, setData] = useState([])
//yjyb students ml server
//Runs automatically when page loads
 //The [] means "run only once when component appears"
    useEffect(() => {
        axios.get('http://localhost:5000/students')
            .then((res) => setData(res.data)) //When data arrives, save it
            .catch((err) => console.log(err)) //If error, show in console
    }, [])
    //Page Loads → useEffect runs → axios.get → Server responds → setData → Page updates with students

    function handleDelete(id) {
        axios.delete(`http://localhost:5000/delete/${id}`)
            .then((res) => {
                setData(data.filter(student => student.id !== id))
            })
            .catch((err) => console.log(err))
    }
//filter() keeps all students EXCEPT the one with matching ID

    return (
        <div className='page-container'>
            <div className='container'>
                <h1 className='page-title text-center'>Student Management System</h1>

                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h3 className='text-white'>Students List</h3>
                    <Link to="/create" className='btn btn-success btn-custom'> 
                        <i className='bi bi-plus-circle me-2'></i>
                        Add Student
                    </Link>
                </div>

                <div className='card card-custom'>
                    <div className='card-body p-0'>
                        <div className='table-responsive'>
                            <table className='table table-hover mb-0'>
                                <thead>
                                    <tr>
                                        <th className='py-3 px-4'>ID</th>
                                        <th className='py-3'>Name</th>
                                        <th className='py-3'>Email</th>
                                        <th className='py-3'>Age</th>
                                        <th className='py-3'>Gender</th>
                                        <th className='py-3 text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 ? (
                                        //If there are students
                                        data.map((student) => (
                                            // map loops through each student and creates a row:

                                            <tr key={student.id}>
                                                <td className='py-3 px-4 fw-bold'>{student.id}</td>
                                                <td className='py-3'>{student.name}</td>
                                                <td className='py-3'>{student.email}</td>
                                                <td className='py-3'>{student.age}</td>
                                                <td className='py-3'>{student.gender}</td>
                                                <td className='py-3 text-center'>
                                                    <Link
                                                        to={`/read/${student.id}`}
                                                        className='btn btn-sm btn-info text-white me-2'
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        to={`/edit/${student.id}`}
                                                        className='btn btn-sm btn-warning me-2'
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(student.id)}
                                                        className='btn btn-sm btn-danger'
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className='text-center py-5'>
                                                <h5 className='text-muted'>No students found</h5>
                                                <p className='text-muted'>Click "Add Student" to get started</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home