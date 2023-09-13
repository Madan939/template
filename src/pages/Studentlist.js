import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from './List'
import { search } from '../store/recordSlice'

const Studentlist = () => {
    const lists = useSelector(state => state.recordState.studentlist)
    const [data, setdata] = useState()
    const dispatch = useDispatch()
    function searchdata(e) {
        e.preventDefault()
        dispatch(search(data))
        setdata("")
    }
    return (
        <>
            <div className='content-wrapper'>

                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline" onSubmit={searchdata}>
                        <input className="form-control mr-sm-2" type="search" onChange={(e) => setdata(e.target.value)} placeholder='search by name' value={data} aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                <div className='container-fluid mt-2'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th className='text-center'>SN</th>
                                <th className='text-center'>Name</th>
                                <th className='text-center'>Phone</th>
                                <th className='text-center'>Address</th>
                                <th className='text-center'>Dob</th>
                                <th className='text-center'>Gender</th>
                                <th className='text-center'>Course</th>
                                <th className='text-center'>Advance</th>
                                <th className='text-center'>Remaining</th>
                                <th className='text-center'>Email</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lists.map((item, idx) => (
                                <List key={item.id} item={item} idx={idx} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Studentlist