import React from 'react'
import { useState, useEffect } from 'react'
import{FaSignInAlt, FaSignOutAlt,FaUser} from 'react-icons/fa'
const Login = () => {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  })

  const {  email, password } = formData

  const onChange = (e) => {
setFormData((prevState)=>({
  ...prevState,
  [e.target.name]: e.target.value,
  // password2: prevState.password2,
  // password: prevState.password,

}))

  }

  const onSubmit =(e)=>{
    e.preventDefault()
    // submit form
  }
   return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to your Account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">

          {/* <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          /> */}


<input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />


<input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />

{/*

<input
            type="password2"
            className="form-control"
            id="password2"
            name="password2"
            value={name}
            placeholder="Confirm your password"
            onChange={onChange}
          />
 */}




          </div>


        </form>

<div className="form-group">
  <button type='submit' className='btn btn-block'>
    Submit
  </button>
</div>





      </section>
    </>
  )
}

export default Login
