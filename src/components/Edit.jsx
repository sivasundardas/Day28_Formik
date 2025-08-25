import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const Edit = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const  [course, setCourse] = useState({
        title:'',
        description:''
    })

    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:5005/courses/${id}`)
        .then(res=>{
            setCourse({title: res.data.title, description: res.data.description})
            setLoading(false)
        })
        .catch(err =>console.log(err))
},[id])

const handleChange = (e) =>{
    setCourse({...course, [e.target.name]:e.target.value})
}

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:5005/courses/${id}`,course)
    .then(()=>{
        alert('Course updated successfully!')
        navigate('/dashboard')
    })
    .catch(err => console.log(err))
}

if(loading) return <p>Loading...</p>
  return (
    <div className='container mt-5'>
        <h2>Edit Course</h2>
        <form onSubmit={handleSubmit} className='mt-4'>
            <div className='mb-3'>
                <lable>Course Title</lable>
                <input type='text' className='form-control' id='title' name='title'
                value={course.title} onChange={handleChange} required />
            </div>
            <div className='mb-3'>
                <lable>Course Desctiption</lable>
                <textarea className='form-control' id='description' name='description'
                value={course.description} onChange={handleChange} rows='4' required />
            </div>
            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default Edit