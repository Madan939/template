import React from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../store/recordSlice'
import { Link } from 'react-router-dom'

const List = ({ item, idx }) => {
    const dispatch = useDispatch()
    // console.log(item)
    return (
        <>
            <tr>
                <td className='text-center'>{idx + 1}</td>
                <td className='text-center'>{item.name}</td>
                <td className='text-center'>{item.phone}</td>
                <td className='text-center'>{item.address}</td>
                <td className='text-center'>{item.dob}</td>
                <td className='text-center'>{item.gender}</td>
                <td className='text-center'>{item.course}</td>
                <td className='text-center'>{item.fee}</td>
                <td className='text-center'>{item.email}</td>
                <td className='d-flex justify-content-center align-items-center'>
                    <Link to={`/student/${item.id}`}><i className="fa-solid fa-pen-to-square m-1" onClick={() => dispatch(edit(item))}></i></Link>
                    <i className="fa-solid fa-trash m-1" onClick={() => dispatch(remove(item))}></i>
                    {/* <button type='button' className='btn btn-danger' >Delete</button> */}
                </td>
            </tr>

        </>
    )
}

export default List