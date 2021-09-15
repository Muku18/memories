import React from 'react'

import {Link} from 'react-router-dom'


const Cardfooter = (props) => {
    return (
        <>
        <div>
            <div className="card-footer  d-flex justify-content-between ">
                <div className="d-flex align-items-center ">
                    <div className="me-2">
                        <img src={props.image} alt="profilepic" />
                    </div>
                    <div >
                        
                        <p className="mb-2">
                            <p className="mt-3"><small>{props.title}</small></p>
                            
                        </p>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <div >
                       <small ><i classNme="far fa-eye views"></i>  1.4k views </small>
                    </div>
                    <div className="ms-2">
                        <Link to="/"><i className="fas fa-share-alt text-secondary"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cardfooter
