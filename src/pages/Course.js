import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcourse } from '../store/recordSlice'
import CourseList from './CourseList'

const Courses = () => {
  const course = useSelector(state => state.recordState.courselist)
  const dispatch=useDispatch()
  const [data,setdata]=useState("")
  function submit(e){
    e.preventDefault()
    const list={
      id:Date.now(),
      course:data
    }
  dispatch(addcourse(list))
    setdata("")
  }
  return (
    <>
    <div className='content-wrapper'>
      <div className='row m-2 mt-4'>
        <div className='col col-6 m-auto'>
          <div className='card'>
          <form onSubmit={submit}>
            <div className='row'>
              <div className='col-7 col-md-8 '>
                <input type='text ' onChange={(e)=>setdata(e.target.value)} className='m-2 w-100' value={data} />
              </div>
              <div className='col-5 col-md-4'>
                <input type='submit' className='btn btn-primary w-75 m-auto mt-1'/>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div><hr />
      <p className='h4'>List of courses</p>
      <ol>
        {course.map((item)=>(
          <CourseList key={item.id} item={item}/>
        ))}
      </ol>
</div>
    </>
  )
}

export default Courses