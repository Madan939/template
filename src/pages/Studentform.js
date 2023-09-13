import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/recordSlice'
import { useNavigate } from 'react-router-dom'

const Studentform = () => {
    const navigate=useNavigate()
    const course = useSelector(state => state.recordState.courselist)
    const dispatch = useDispatch()
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Dob, setDob] = useState("")
    const [Address, setAddress] = useState("")
    const [Course, setcourse] = useState("")
    const [Fee, setFee] = useState("")
    const [Gender, setGender] = useState("")
    function submit(e) {
        e.preventDefault()

        const data = {
            id: Date.now(),
            name: Name,
            phone: Phone,
            dob: Dob,
            email: Email,
            gender:Gender,
            address: Address,
            course: Course,
            fee: Fee
        }
      //  console.log(data)
        dispatch(add(data))
        setName("")
        setPhone("")
        setEmail("")
        setDob("")
        setGender("")
        setcourse("")
        setAddress("")
        setFee("")
        navigate('/studentlist')
    }
    return (
        <>
            <div className='content-wrapper'>
                <div className="col-8 m-auto ">
                    <form onSubmit={submit}>
                        <h1 className="text text-center text-light bg-primary">Record form</h1>
                        <div className="mb-3 ">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} value={Name} placeholder='enter name' />

                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="phone">Phone</label>
                            <input className="form-control" type="number" id="phone" onChange={(e) => setPhone(e.target.value)} value={Phone} placeholder='enter phone' />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="date">Dob</label>
                            <input className="form-control" type="date" id="date" onChange={(e) => setDob(e.target.value)} value={Dob} />

                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={Email} placeholder='enter email address' />

                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="address">Address</label>
                            <input className="form-control" type="text" id="address" onChange={(e) => setAddress(e.target.value)} value={Address} placeholder='enter address' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor="gender">Gender:</label>
                            <input type='radio' id="male" name='gender' value="Male" onChange={(e) => setGender(e.target.value)} checked={Gender === 'Male'}  /><label htmlFor="male"> Male </label>
                            <input type='radio' id="female" name='gender' value="Female"onChange={(e) => setGender(e.target.value)} checked={Gender === 'Female'}  /><label htmlFor="female"> Female </label>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor=''>Course:</label><select onChange={(e) => setcourse(e.target.value)} value={Course} >
                                <option value="">Choose your course</option>
                                {course.map((item) => (
                                    <option key={item.id}value={item.id}>{item.course}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fee">Advance Payment</label>
                            <input className="form-control" type="number" id="fee" onChange={(e) => setFee(e.target.value)} value={Fee} placeholder='enter advance payment' />

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

export default Studentform