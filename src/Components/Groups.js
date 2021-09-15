import React from 'react'

import {Link} from 'react-router-dom'
import sarthak from '../Images/sarthak.png'
import sarah from '../Images/sarah.png'
import ronal from '../Images/ronal.png'
import joseph from '../Images/joseph.png'


const Groups = () => {
    const handleClick = () => {
        document.querySelector(".btn1").innerHTML = "Connected";
        document.querySelector(".btn1").style.backgroundColor = "black";
    }
    return (
        <div className="mt-5">
            <div >
                <h5 className = "ms-5 ps-4"><i class="fas fa-user-friends"></i>&nbsp;&nbsp;PEOPLES</h5>
            </div>
            <div className="mt-4 container">
                <div className="d-flex">
                    <div className="Groups">
                        <ul className="list-inline">
                            <li className="my-4"><img src={sarthak} alt="profilepic" /> &nbsp;&nbsp; <strong> Sarthak Karma </strong></li>
                            <li className="my-4"><img src={sarah} alt="profilepic" /> &nbsp;&nbsp; <strong> Sarthak Karma </strong></li>
                            <li className="my-4"><img src={ronal} alt="profilepic" /> &nbsp;&nbsp; <strong> Sarthak Karma </strong></li>
                            <li className="my-4"><img src={joseph} alt="profilepic" /> &nbsp;&nbsp; <strong>Siddharth Goyal</strong></li>

                        </ul>
                    </div>
                    <div >

                        <ul>
                            <button type="button" onClick={handleClick} className=" rounded-pill btn btn-secondary mt-4  btn-sm btn1">Connect</button>
                        </ul>
                        <ul>
                            <button type="button" className="rounded-pill btn btn-secondary mt-4 btn-sm btn1">Connect</button>
                        </ul>
                        <ul>
                            <button type="button" className="rounded-pill btn btn-secondary mt-3  btn-sm btn1">Connect</button>
                        </ul>
                        <ul>
                            <button type="button" className="rounded-pill btn btn-secondary mt-3  btn-sm btn1">Connect</button>
                        </ul>




                    </div>
                </div>
                <div>
                    <Link to="/" className="ms-5 ps-5 mb-5 text-decoration-none "> <b> See More ... </b></Link>
                </div>
            </div>

        </div>
    )
}

export default Groups
