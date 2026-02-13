import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function Edit() {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    })
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/get_student/${id}`)
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    setStudent(res.data[0])
                }
            })
            .catch(err => console.log(err))
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:5000/edit_user/${id}`, student)
            .then((res) => {
                navigate('/')
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='page-container'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-6'>
                        <h1 className='page-title text-center'>Edit Student</h1>
                        
                        <div className='form-custom'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <label htmlFor="name" className='form-label fw-bold'>Name</label>
                                    <input 
                                        value={student.name} 
                                        type="text" 
                                        name='name' 
                                        className='form-control'
                                        onChange={(e) => setStudent({ ...student, name: e.target.value })} 
                                        required
                                    />
                                </div>
                                
                                <div className='mb-4'>
                                    <label htmlFor="email" className='form-label fw-bold'>Email</label>
                                    <input 
                                        value={student.email} 
                                        type="email" 
                                        name='email' 
                                        className='form-control'
                                        onChange={(e) => setStudent({ ...student, email: e.target.value })} 
                                        required
                                    />
                                </div>
                                
                                <div className='mb-4'>
                                    <label htmlFor="age" className='form-label fw-bold'>Age</label>
                                    <input 
                                        value={student.age} 
                                        type="number" 
                                        name='age' 
                                        className='form-control'
                                        onChange={(e) => setStudent({ ...student, age: e.target.value })} 
                                        required
                                    />
                                </div>
                                
                                <div className='mb-4'>
                                    <label htmlFor="gender" className='form-label fw-bold'>Gender</label>
                                    <select 
                                        value={student.gender}
                                        name='gender' 
                                        className='form-control'
                                        onChange={(e) => setStudent({ ...student, gender: e.target.value })}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                
                                <div className='d-flex gap-2'>
                                    <button type="submit" className='btn btn-success btn-custom flex-grow-1'>
                                        Save Changes
                                    </button>
                                    <Link to="/" className='btn btn-secondary btn-custom'>
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit