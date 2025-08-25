//import './App.css'
import Login from "./components/Login"
import {Routes, Route, Link} from 'react-router-dom'
import Registration from "./components/Registration"
import Welcome from "./components/Welcome"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Edit from "./components/Edit"
import Add from './components/Add'

function App() {
  
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registeration />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/edit/:id' element = {<Edit />} />
      <Route path='/add' element={<Add />} />
    </Routes>
    </div>
  )
}

export default App 