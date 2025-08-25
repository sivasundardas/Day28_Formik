import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {email:'', password:''},
    validationSchema: Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6,"Min 6 characters").required("Password is required")
    }),
    onSubmit: async(values) =>{
        const res = await axios.get(`http://localhost:5005/users?email=${values.email}&password=${values.password}`)

        if(res.data.length>0){
            alert('Login Successful')
            navigate('/dashboard')
        }
        else{
            alert('Invalid Credentials!')
        }
       // alert("Login Successful!" + JSON.stringify(values, null, 2))
    }
  })  
  return (
    <div className='container mt-4'>
        <h3>Login</h3>
       <form onSubmit={formik.handleSubmit} className='card p-3 shadow-sm'>
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
        <button type='submit' className='btn btn-primary w-100'>Login</button>
        </form> 

    </div>
  )
}

export default Login