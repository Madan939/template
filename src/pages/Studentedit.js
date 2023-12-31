import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../store/recordSlice'
import { useNavigate } from 'react-router-dom'

const Studentedit = () => {
    // const studentlist = useSelector(state => state.recordState.studentlist)
    const courses = useSelector(state => state.recordState.courselist)
    const student = useSelector(state => state.recordState.student)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [course, setcourse] = useState("")
    const [fee, setFee] = useState("")
    const [gender, setGender] = useState("")
    //console.log(student)
    useEffect(() => {
        if (student && student.name !== undefined) {
            setName(student.name)
            setPhone(student.phone)
            setEmail(student.email)
            setDob(student.dob)
            setGender(student.gender)
            setcourse(student.course)
            setAddress(student.address)
            setFee(student.fee)
        }
    }, [student]);
    function sub(e) {
        e.preventDefault()
        //  console.log(Name)
        const id = student.id
        let studentdata = {
            id, name, dob, phone, email, gender, fee, address, course
        }
        //console.log(studentdata,student.id)

        dispatch(update({ ...student, studentdata: studentdata }))

        navigate('/studentlist')
    }
    return (
        <>
            <div className='content-wrapper'>
                <div className="col-8 m-auto ">
                    <form onSubmit={sub}>
                        <h1 className="text text-center text-light bg-primary">Record form</h1>
                        <div className="mb-3 ">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder='enter name' />

                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="phone">Phone</label>
                            <input className="form-control" type="number" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='enter phone' />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="date">Dob</label>
                            <input className="form-control" type="date" id="date" onChange={(e) => setDob(e.target.value)} value={dob} />

                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='enter email' />

                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="address">Address</label>
                            <input className="form-control" type="text" id="address" onChange={(e) => setAddress(e.target.value)} value={address} placeholder='enter address' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor="gender">Gender:</label>
                            <input type='radio' id="male" name='gender' value="Male" onChange={(e) => setGender(e.target.value)} checked={gender === 'Male'} /><label htmlFor="male"> Male </label>
                            <input type='radio' id="female" name='gender' value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === 'Female'} /><label htmlFor="female"> Female </label>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor=''>Course:</label><select onChange={(e) => setcourse(e.target.value)} value={course} >
                                <option>Choose your course</option>
                                {courses.map((item) => (
                                    <option key={item.id}value={item.id}>{item.course}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fee">Advance payment</label>
                            <input className="form-control" type="number" id="fee" onChange={(e) => setFee(e.target.value)} value={fee} placeholder='enter advance payment' />

                        </div>
                        <div className="col-6 mb-3 offset-md-3">
                            <button className="form-control btn btn-primary" type='submit'>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Studentedit