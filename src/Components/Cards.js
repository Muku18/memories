import React from 'react'
import { Link} from 'react-router-dom'
import Cardfooter from './Cardfooter'

const Cards = (props) => {

    return (
        <>

            <div className="card mb-3" >
                <img src={props.image} className="card-img-top" />


                <h4 className="card-title ms-3 mt-2"><i className={`fas fa-${props.icons}`}></i> {props.title}</h4>
                <div className="d-flex justify-content-between">
                    <div className="card-body">

                        <p className="card-title"><strong>{props.desc}</strong></p>
                        <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
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

        </>
    )
}

export default Cards
