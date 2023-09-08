import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard1 from '../pages/Dashboard1'
import Dashboard2 from '../pages/Dashboard2'
import Widget from '../pages/Widget'
import Studentform from '../pages/Studentform'
import Studentlist from '../pages/Studentlist'
import Courses from '../pages/Course'
import Studentedit from '../pages/Studentedit'

const Allroute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard1' element={<Dashboard1/>}/>
        <Route path='/dashboard2' element={<Dashboard2/>}/>
        <Route path='/widgets' element={<Widget/>}/>
        <Route path='/studentform' element={<Studentform/>}/>
        <Route path='/studentlist' element={<Studentlist/>}/>
        <Route path='/student/:id' element={<Studentedit/>}/>
        <Route path='/courses' element={<Courses/>}/>

    </Routes>
    </>
  )
}

export default Allroute