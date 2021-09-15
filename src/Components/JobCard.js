import React from 'react'
import {Link} from 'react-router-dom'
import Cardfooter from './Cardfooter'
import vector from '../Images/Vector.png'

const JobCard = (props) => {
    return (
        <div>
             <div className="card mb-3" >
                


                <h4 className="card-title ms-3 mt-2"><i className={`fas fa-${props.icons}`}></i>&nbsp;{props.title}</h4>
                <div className="d-flex justify-content-between">
                    <div className="card-body">

                        <p className="card-title"><strong>{props.desc}</strong></p>
  
                        <div>
                            <div className="d-flex">
                                <div>
                                    <p><img src= {vector} alt ="vector"/> Innovaccer Analytics Private Ltd.</p>
                                </div>
                                <div className = "ms-5">
                                    <p><i class="fas fa-map-marker-alt"></i> Noida, India</p>
                                </div>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-outline-success" type="button">Apply on time jobs</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown">

                            <i className="fas fa-ellipsis-h  me-5 mt-4" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            </i>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" to="/">Edit</Link></li>
                                <li><Link className="dropdown-item" to="/">Report</Link></li>
                                <li><Link className="dropdown-item" to="/">Option-3</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                        <Cardfooter image = {props.imagefoot} title = {props.footertitle}/>
                
              

            </div>
        </div>
        
    )
}

export default JobCard
