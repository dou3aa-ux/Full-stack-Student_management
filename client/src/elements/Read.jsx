import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function Read() {
    const [student, setStudent] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/get_student/${id}`)
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    setStudent(res.data[0])
                }
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className='page-container'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-6'>
                        <h1 className='page-title text-center'>Student Details</h1>
                        
                        <div className='card card-custom'>
                            <div className='card-body p-4'>
                                {student ? (
                                    <div>
                                        <div className='mb-3 pb-3 border-bottom'>
                                            <label className='text-muted small'>ID</label>
                                            <h5 className='mb-0'>{student.id}</h5>
                                        </div>
                                        <div className='mb-3 pb-3 border-bottom'>
                                            <label className='text-muted small'>Name</label>
                                            <h5 className='mb-0'>{student.name}</h5>
                                        </div>
                                        <div className='mb-3 pb-3 border-bottom'>
                                            <label className='text-muted small'>Email</label>
                                            <h5 className='mb-0'>{student.email}</h5>
                                        </div>
                                        <div className='mb-3 pb-3 border-bottom'>
                                            <label className='text-muted small'>Age</label>
                                            <h5 className='mb-0'>{student.age}</h5>
                                        </div>
                                        <div className='mb-4'>
                                            <label className='text-muted small'>Gender</label>
                                            <h5 className='mb-0'>{student.gender}</h5>
                                        </div>
                                        
                                        <div className='d-flex gap-2'>
                                            <Link to={`/edit/${student.id}`} className='btn btn-warning btn-custom flex-grow-1'>
                                                Edit Student
                                            </Link>
                                            <Link to="/" className='btn btn-secondary btn-custom'>
                                                Back to List
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='text-center py-5'>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className='mt-3 text-muted'>Loading student data...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read