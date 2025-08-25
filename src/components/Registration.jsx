import React from 'react'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

const Registeration = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {username: '', email: '', password: '', confirmPassword: ''},
    validationSchema: Yup.object({
      username: Yup.string().min(3,'At least 3 characters').required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6,'At least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')],'Password must match')
      .required('Confirm your password')
    }),
    onSubmit: async(values) =>{
      await axios.post('http://localhost:5005/users',values)
      alert('Registration Successful!')
      navigate('/login')
    }
  })
  return (
    <div className='container mt-4'>
        <h3>Register</h3>
       <form onSubmit={formik.handleSubmit} className='card p-3 shadow-sm'>
        <div className='mb-3'>
            <label>Username</label>
            <input type="text" 
            className={`form-control ${formik.touched.username && formik.errors.username
            ?'is-invalid':''}`}
            {...formik.getFieldProps('username')} />
            {formik.touched.username && formik.errors.username && (
                <div className='invalid-feedback'>{formik.errors.username}
                </div>
            )}
        </div>
        <div className='mb-3'>
            <label>Email</label>
            <input type="email" 
            className={`form-control ${formik.touched.email && formik.errors.email
            ?'is-invalid':''}`}
            {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email && (
                <div className='invalid-feedback'>{formik.errors.email}
                </div>
            )}
        </div>
        <div className='mb-3'>
            <label>Password</label>
            <input type="password" 
            className={`form-control ${formik.touched.password && formik.errors.password
            ?'is-invalid':''}`}
            {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password && (
                <div className='invalid-feedback'>{formik.errors.password}
                </div>
            )}
        </div>
        <div className='mb-3'>
            <label>Confirm Password</label>
            <input type="password" 
            className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword
            ?'is-invalid':''}`}
            {...formik.getFieldProps('confirmPassword')} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className='invalid-feedback'>{formik.errors.confirmPassword}
                </div>
            )}
        </div>
        <button type='submit' className='btn btn-primary w-100'>Login</button>
        </form> 

    </div>
  )
}

export default Registeration