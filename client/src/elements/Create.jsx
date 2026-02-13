import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    })

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/add_user', values)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='page-container'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-6'>
                        <h1 className='page-title text-center'>Add New Student</h1>
                        
                        <div className='form-custom'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <label htmlFor="name" className='form-label fw-bold'>Name</label>
                                    <input 
                                        type="text" 
                                        name='name' 
                                        className='form-control' 
                                        placeholder='Enter student name'
                                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                                        required
                                    />
                                </div>
                                
                                <div className='mb-4'>
                                    <label htmlFor="email" className='form-label fw-bold'>Email</label>
                                    <input 
                                        type="email" 
                                        name='email' 
                                        className='form-control' 
                                        placeholder='Enter email address'
                                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                                        required
                                    />
                                </div>
                                
                                <div className='mb-4'>
                                    <label htmlFor="age" className='form-label fw-bold'>Age</label>
                                    <input 
                                        type="number" 
                                        name='age' 
                                        className='form-control' 
                                        placeholder='Enter age'
                                        onChange={(e) => setValues({ ...values, age: e.target.value })}
                                        required
                                    />
                                </div>
                                
                                <div className='mb-4'>
                                    <label htmlFor="gender" className='form-label fw-bold'>Gender</label>
                                    <select 
                                        name='gender' 
                                        className='form-control'
                                        onChange={(e) => setValues({ ...values, gender: e.target.value })}
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
                                        Add Student
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

export default Create