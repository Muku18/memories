import React from 'react'
import whole from '../Images/whole.png'
import {Link} from 'react-router-dom'

import Signin from './Signin'
import Signup from './Signup'



const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" ><img src={whole} alt = "weblogo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container mt-2">
                            <form >
                                <input className="form-control  rounded-pill container text-center" type="search" placeholder="&#128269; Search for your favourites group in ATG" aria-label="Search" />
                            </form>
                        </div>

                        <ul className="navbar-nav ms-auto me-3 pe-3 mb-lg-0">
                            
                            <li className="nav-item dropdown">
                                <div className = "nav-item-3 d-flex flex-column">
                                    <div>

                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Create an account <b>It's free!</b>
                                        </a>


                                    </div>
                                    <div className = "d-flex">
                                        <div>
                                            <button type="button" className="btn rounded-pill btn-outline-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Sign up
                                            </button>



                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg ">
                                                    <div className="modal-content">

                                                        <div className="modal-body">
                                                            <div className="d-flex mb-4">
                                                                <div className="alert alert-success container-fluid signup-alert" role="alert">
                                                                    <small>Lets Learn , share & inspire each other with our passion for computer science engineering!! sign up Now</small>
                                                                </div>
                                                                <button type="button" className="btn-close signup-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <Signup />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" className="btn rounded-pill btn-outline-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                Sign in
                                            </button>


                                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        <div className="modal-body">
                                                            <div className="d-flex">
                                                                <div className="alert alert-success container-fluid signup-alert" role="alert">
                                                                    Lets Learn share and inspire each other with our passion for computer science engineering!!
                                                                </div>
                                                               
                                                                <button type="button" className="btn-close mb-4" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <Signin />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>




                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
