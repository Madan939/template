import React from 'react'
import { useSelector } from 'react-redux'
import List from './List'

const Studentlist = () => {
    const lists = useSelector(state => state.recordState.studentlist)
    //console.log(lists)
    return (
        <>
            <div className='content-wrapper'>
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
                                <th className='text-center'>Fee</th>
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