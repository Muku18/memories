import React from 'react'
import Rectangle2 from '../Images/Rectangle2.png'


const Main = () => {
    return (
        <div className="root">
            <div id="bgImage" style = {{backgroundImage: `url(${Rectangle2})`}}>
                    <h3> Computer Engineering</h3>
                    <small> 142,765 Compouter Engineer follow this </small>
            </div>

        </div>
    )
}

export default Main
