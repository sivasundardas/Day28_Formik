import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Add = () => {

    const navigate = useNavigate();
    const[course, setCourse] = useState({
        title:'',
        description: ''
    })

    const handleChange = (e) =>{
        setCourse({
            ...course, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5005/courses', course)
            alert('Course Added Successfully!')
            setCourse({title:'', description:''})
            navigate('/dashboard')
        }
        catch(error){
            console.error('Error adding course: ', error)
        }
    }
  return (
    <div className='container mt-5' style={{maxwidth: "600px"}}>
        <div className='card shadow p-4'>
            <h3 className='mb-4'>Add New Course</h3>
            
            <form onSubmit = {handleSubmit}>
                <div className='mb-3'>
                    <label>Course Title</label>
                    <input type='text' className='form-control' name='title' 
                    value={course.title} onChange={handleChange} 
                    placeholder='Enter course title' required />
                </div>
                <div className='mb-3'>
                    <label>Course Description</label>
                    <textarea className='form-control' name='description' 
                    value={course.description} onChange={handleChange} 
                    placeholder='Enter course description' required />
                </div>
                <button type='submit' className='btn btn-success w-100'>
                    Add Course
                </button>
            </form>
            
        </div>
    </div>
  )
}

export default Add