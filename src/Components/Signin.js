import React from 'react'
import { Link } from 'react-router-dom'

import Group3 from '../Images/Group3.png'
import fb from '../Images/fb.png'
import search from '../Images/search.png'

const Signin = () => {
  return (
    <div className="container-fluid">



      <div className="d-flex  justify-content-between align-items-center signin-h">
        <div>
          <h3> Sign in</h3>
        </div>
        <div className="">
          <p> Don't have an account? <Link to="/" className="text-decoration-none"><strong>Create new !</strong></Link> </p>
        </div>
      </div>

      <div className="d-flex sign">
        <div >

          <form className = "mt-5">
            <div className="d-flex flex-column mb-2" >


              <input type="email" placeholder="Email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              <input type="email" placeholder="Password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="d-flex flex-column">
              <button type="submit" className="rounded-pill btn btn-primary mb-3">Sign In</button>
              <button className="btn btn-outline-dark mt-3"><img src = {fb} alt ="fb"/> &nbsp;<Link className="text-decoration-none text-secondary" to="/">Sign up with facebook</Link></button>
              <button className="btn btn-outline-dark mt-3 mb-2"><img src = {search} alt ="search"/> &nbsp;<Link className="text-decoration-none text-secondary" to="/">Sign up with google</Link></button>

              <p className="text-center"> <Link  className="text-decoration-none text-secondary" to="/"><strong>Forgot Password ? </strong></Link> </p>
            </div>

          </form>
        </div>
        <div className="ms-auto signin-image" >
          <img className="ms-5 " style={{
            objectFit: "contain",
            width: "400px"
          }} src={Group3} alt="signin" />


        </div>

      </div>
    </div>
  )
}

export default Signin
