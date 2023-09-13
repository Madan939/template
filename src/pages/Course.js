import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcourse, updatecourse } from '../store/recordSlice'
import CourseList from './CourseList'

const Courses = () => {
  const course = useSelector(state => state.recordState.courselist)
  const findcourse = useSelector(state => state.recordState.COURSE)
  const dispatch = useDispatch()
  const [data, setdata] = useState("")
  const [fee, setfee] = useState("")
  useEffect(() => {
    if (findcourse && findcourse.course !== undefined) {
      setdata(findcourse.course)
      setfee(findcourse.fee)
    }
  }, [findcourse]);
  function submit(e) {
    e.preventDefault()
    if (findcourse.id) {
      const id = findcourse.id
      let coursedata = {
        id, data, fee
      }
      dispatch(updatecourse({ ...findcourse, coursedata: coursedata }))
      setdata("")
      setfee("")
    }
    else {
      const list = {
        id: Date.now().toString(),
        course: data,
        fee: fee
      }
      dispatch(addcourse(list))
      setdata("")
      setfee("")
    }

  }
  return (
    <>
      <div className='content-wrapper'>
        <div className='row m-2 mt-4'>
          <div className='col col-5 m-auto'>
            <div className='card'>
              <form onSubmit={submit} className='m-2'>
                <div className=' mb-2'>
                  <label htmlFor="course">Course:</label>
                  <input type='text ' id="course" onChange={(e) => setdata(e.target.value)} value={data} placeholder='enter course name' className='w-100'/><br />
                </div>
                <div className=' mb-2'>
                  <label htmlFor="fee">Fee:</label>
                  <input type='number' placeholder='enter course amount' onChange={(e) => setfee(e.target.value)} value={fee} className='w-100'/><br />
                </div>

                <div className='m-auto w-25'>{findcourse.id?(<button className='btn btn-success w-100' type='submit'>Update</button>):(<button className='btn btn-primary w-100' type='submit'>Add</button>)}</div>

              </form>
            </div>
          </div>
        </div><hr />
        <p className='h4'>List of courses</p>
        <div className='container-fluid'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th className='text-center'>SN</th>
                <th className='text-center'>Id</th>
                <th className='text-center'>Course</th>
                <th className='text-center'>Fee</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {course.map((item, idx) => (
                <CourseList key={item.id} item={item} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Courses
