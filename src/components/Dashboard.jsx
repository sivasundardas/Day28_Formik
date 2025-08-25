import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();
    const [courses, setCourses] = useState([])

    const fetchCourses = () =>{
        axios.get('http://localhost:5005/courses')
        .then(res=>setCourses(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchCourses()
    },[])

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:5005/courses/${id}`)
        .then(()=>fetchCourses())
        .catch(err=>console.log(err))
    }

    const handleEdit = (id) =>{
        navigate(`/edit/${id}`)
    }
  return (
    <div className='container mt-4'>
        <h2 className='mb-4'>Course List</h2>
        <div className='row'>
            {courses.map(c => (
                <div key={c.id} className='col-md-4 mb-4'>
                    <div className='card h-100 shadow-sm'>
                        <div className='card-body'>
                            <h5 className='card-title'>{c.title}</h5>
                            <p className='card-text'>{c.description}</p>
                            <button onClick={()=>handleEdit(c.id)} className='btn btn-primary me-2'>Edit</button>
                            <button onClick={()=>handleDelete(c.id)} className='btn btn-primary'>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Dashboard