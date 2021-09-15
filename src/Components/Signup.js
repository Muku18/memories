import React from 'react'
import Group3 from '../Images/Group3.png'
import {Link} from 'react-router-dom'
import fb from '../Images/fb.png'
import search from '../Images/search.png'

const Signup = () => {
    return (
        <div className="container-fluid">

            <div className="d-flex signup-h">
                <div>
                    <h3> Create account</h3>
                </div>
                <div className="ms-auto">
                    <p> Alreay have an account? <Link to = "/" className="text-decoration-none"><strong>Sign in</strong></Link> </p>
                </div>
            </div>

            <div className="d-flex create">
                <div className="signup-form" >

                    <form className = "mt-5">
                        <div className="d-flex flex-column mb-2">
                            <input type="email" placeholder="Name " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <input type="email" placeholder="Email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <input type="email" placeholder="Password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
                            <input type="email" placeholder="Confirm Password " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

                        </div>

                        <div className="d-flex flex-column">
                            <button type="submit" className="rounded-pill btn btn-primary mb-3">Create Account</button>
                            <button className="btn btn-outline-dark mt-3"><img src = {fb}/> &nbsp;<Link className="text-decoration-none text-secondary" to="/">Sign up with facebook</Link></button>
                            <button className="btn btn-outline-dark mt-3 mb-2"><img src = {search}/> &nbsp;<Link className="text-decoration-none text-secondary" to="/">Sign up with google</Link></button>
                        </div>
                    </form>
                </div>
                <div className="ms-auto signup-image" >
                    <img className="ms-5 " style={{
                        objectFit: "contain",
                        width: "450px"
                    }} src={Group3} alt = "signup"/>


                </div>

            </div>
            <div className="d-flex justify-content-end">
                <p className><small>By signing up, you agree to our terms and condition, Privacy Policy</small></p>
            </div>
        </div>
    )
}

export default Signup
