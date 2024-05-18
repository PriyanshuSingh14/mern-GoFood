import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [credentials, setcredentials] = useState({name:"",email:"",password:"",geoLocation:""});
  const handleSubmit=async(e)=>{
    e.preventDefault(); //synthetic method
    const response=fetch("http://localhost:5000/api/createuser",{
      method:"POST",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password,location:credentials.geoLocation})
      //key-name should be the same to the backend
      
    })
}

  const onChangeHandler=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit }>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChangeHandler}/>

        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChangeHandler}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"  name='password' value={credentials.password} onChange={onChangeHandler}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputgeoLocation1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputgeoLocation1"  name='geoLocation' value={credentials.geoLocation} onChange={onChangeHandler}/>
        </div>
        

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
      </form></div>
  )
}

export default SignUp