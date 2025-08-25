import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-start">
      <div className="text-center p-5 border rounded shadow" style={{ maxWidth: '1200px' }}>
        <h1 className="mb-4">Welcome to Course Management System</h1>
        <p className="mb-4">Please login or register to continue</p>
        <div>
          <button
            className="btn btn-primary me-3"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="btn btn-success"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome