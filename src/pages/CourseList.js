import React from 'react'
import { useDispatch } from 'react-redux'
import { editcourse, removecourse } from '../store/recordSlice'

const CourseList = ({ item, idx }) => {

  const dispatch = useDispatch()

  return (
    <>
      <tr>
        <td className='text-center'>{idx + 1}</td>
        <td className='text-center'>{item.id}</td>
        <td className='text-center'>{item.course}</td>
        <td className='text-center'>{item.fee}</td>
        <td>
          <i className="fa-solid fa-pen-to-square m-1" onClick={() => dispatch(editcourse(item))}></i>
          <i className="fa-solid fa-trash m-1" onClick={() => dispatch(removecourse(item))} ></i>
        </td>
      </tr>
    </>
  )
}

export default CourseList