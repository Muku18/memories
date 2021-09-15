import React from 'react'
import Cards from './Cards'
import EventCard from './EventCard'
import Groups from './Groups'
import Rectangle4 from '../Images/Rectangle4.png'
import Rectangle5 from '../Images/Rectangle5.png'
import Rectangle6 from '../Images/Rectangle6.png'
import sarthak from '../Images/sarthak.png'
import sarah from '../Images/sarah.png'
import ronal from '../Images/ronal.png'
import joseph from '../Images/joseph.png'
import JobCard from './JobCard'

import jobs from '../Images/jobs.jpg'
import {
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";


const Main2 = (props) => {
    const location = useLocation();
  
    return (
        <>
            <div className="container my-res  align-items-center justify-content-between mt-3 d-flex ">

                <ul className="d-flex mt-3  my-ul list-inline">
                    <li className="mx-3">
                        <strong><Link id = "allposts" to="/allposts" className=
                        {`text-decoration-${location.pathname === "/allposts" || location.pathname === "/" ? " " : "none"}
                        
                        text-dark active`
                    }
                        >All posts(32)</Link></strong>
                    </li>
                    <li className="mx-3">
                        <strong><Link to="/articles" className= {`text-decoration-${location.pathname === "/articles"? " " : "none"}
                        
                        text-dark active`
                    } 
                        >Articles</Link></strong>
                    </li>
                    <li className="mx-3">
                        <strong><Link to="/events" className= {`text-decoration-${location.pathname === "/events"? " " : "none"}
                        
                        text-dark active`
                    } 
                        >Events</Link></strong>
                    </li>
                    <li className="mx-3">
                        <strong><Link to="/education" className= {`text-decoration-${location.pathname === "/education"? " " : "none"}
                        
                        text-dark active`
                    } 
                        >Education</Link></strong>
                    </li>
                    <li className="mx-3">
                        <strong><Link to="/jobs" className=    {`text-decoration-${location.pathname === "/jobs"? " " : "none"}
                        
                        text-dark active`
                    }
                        >Jobs</Link></strong>
                    </li>

                </ul>
                <div className="d-flex">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle me-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Write a Post
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <form>
                                <textarea className="form-control mb-3" placeholder="Write.." id="exampleFormControlTextarea1" rows="6" cols="10"></textarea>
                                <button className="btn rounded-pill btn-dark ms-5"> post </button>
                            </form>

                        </ul>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary"><i className="fas fa-user-friends"></i>	&nbsp;join group</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
            </div>

            <div className="container justify-content-between  mt-5 my-main2 d-flex">
                <div className=" ">
                    <Switch>
                    <Route exact path="/">
                       
   
                            <Cards image={Rectangle5} imagefoot = {sarthak} footertitle = "Sarthak Karma" title="Article" desc ="what if famous brand has regular fonts? Meet Regular Brands ! " icons = "newspaper"/>
                            <Cards image={Rectangle4} imagefoot = {sarah} footertitle = "Sarah West" title="Education" desc = "Tax Benefits for Investment under National Pension Scheme launched by Government" icons = "user-graduate"/>
                            <EventCard image={Rectangle6} imagefoot = {ronal} footertitle = "Ronal Jones" title="Events" desc = "Finance & Investment Elite Social Mixer @Lujiazui" icons = "calendar-alt"/>
                            <JobCard image={jobs}  imagefoot = {joseph} footertitle = "Joseph Gray" title="jobs" desc = "Software Developer" icons = "user-md"/>
                            

                        </Route>
                        <Route exact path="/allposts">
                            
   
                            <Cards image={Rectangle5} imagefoot = {sarthak} footertitle = "Sarthak Karma" title="Article" desc ="what if famous brand has regular fonts? Meet Regular Brands ! " icons = "newspaper"/>
                            <Cards image={Rectangle4} imagefoot = {sarah} footertitle = "Sarah West" title="Education" desc = "Tax Benefits for Investment under National Pension Scheme launched by Government" icons = "user-graduate"/>
                            <EventCard image={Rectangle6} imagefoot = {ronal} footertitle = "Ronal Jones" title="Events" desc = "Finance & Investment Elite Social Mixer @Lujiazui" icons = "calendar-alt"/>
                            <JobCard image={jobs}  imagefoot = {joseph} footertitle = "Joseph Gray" title="jobs" desc = "Software Developer" icons = "user-md"/>
                          

                        </Route>

                        <Route exact path="/articles">

                            <Cards image={Rectangle5} imagefoot = {sarthak} footertitle = "Sarthak Karma" title="Article" desc ="what if famous brand has regular fonts? Meet Regular Brands !" icons = "newspaper"/>
                            <Cards image={Rectangle5} imagefoot = {sarthak}  footertitle = "Sarthak Karma"title="Article" desc ="what if famous brand has regular fonts? Meet Regular Brands !" icons = "newspaper"/>
                            <Cards image={Rectangle5} imagefoot = {sarthak} footertitle = "Sarthak Karma" title="Article" desc ="what if famous brand has regular fonts? Meet Regular Brands !" icons = "newspaper"/>
                            <Cards image={Rectangle5} imagefoot = {sarthak} footertitle = "Sarthak Karma" title="Article" desc ="what if famous brand has regular fonts? Meet Regular Brands !" icons = "newspaper"/>


                        </Route>

                        <Route exact path="/events">

                            <EventCard image={Rectangle6}  imagefoot = {ronal} footertitle = "Sarah West" title="Events" desc = "Finance & Investment Elite Social Mixer @Lujiazui" icons = "calendar-alt"/>
                            <EventCard image={Rectangle6} imagefoot = {ronal} footertitle = "Sarah West" title="Events" desc = "Finance & Investment Elite Social Mixer @Lujiazui" icons = "calendar-alt"/>
                            <EventCard image={Rectangle6} imagefoot = {ronal} footertitle = "Sarah West" title="Events" desc = "Finance & Investment Elite Social Mixer @Lujiazui" icons = "calendar-alt"/>
                            <EventCard image={Rectangle6} imagefoot = {ronal} footertitle = "Sarah West" title="Events" desc = "Finance & Investment Elite Social Mixer @Lujiazui" icons = "calendar-alt"/>
                            

                        </Route>

                        <Route exact path="/education">

                            <Cards image={Rectangle4} imagefoot = {sarah} footertitle = "Ronal Jones" title="Education" desc = "Tax Benefits for Investment under National Pension Scheme launched by Government" icons = "user-graduate"/>
                            <Cards image={Rectangle4} imagefoot = {sarah} footertitle = "Ronal Jones" title="Education" desc = "Tax Benefits for Investment under National Pension Scheme launched by Government" icons = "user-graduate"/>
                            <Cards image={Rectangle4} imagefoot = {sarah} footertitle = "Ronal Jones" title="Education" desc = "Tax Benefits for Investment under National Pension Scheme launched by Government" icons = "user-graduate"/>
                            <Cards image={Rectangle4} imagefoot = {sarah} footertitle = "Ronal Jones" title="Education" desc = "Tax Benefits for Investment under National Pension Scheme launched by Government" icons = "user-graduate"/>

                        </Route>

                        <Route exact path="/jobs">
                            
                            <JobCard image={jobs}  imagefoot = {joseph} footertitle = "Joseph Gray" title="jobs" desc = "Software Developer" icons = "user-md"/>
                            <JobCard image={jobs}  imagefoot = {joseph} footertitle = "Joseph Gray" title="jobs" desc = "Software Developer" icons = "user-md"/>
                            <JobCard image={jobs}  imagefoot = {joseph} footertitle = "Joseph Gray" title="jobs" desc = "Software Developer" icons = "user-md"/>
                            <JobCard image={jobs}  imagefoot = {joseph} footertitle = "Joseph Gray" title="jobs" desc = "Software Developer" icons = "user-md"/>
                          
                        </Route>
                    </Switch>


                </div>


                
                <div className="d-flex flex-column align-items-center my-main2-form  ">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">
                        <p><input placeholder="Enter your location" className="form-control me-2  border-0" type="search" aria-label="Search" /></p>
                        <hr />
                    </label>
                    <p>
                        <i className="fas fa-exclamation-circle"></i> Your location will help us serve better <br/> and extend a personalised experience.
                    </p>
                    <Groups />
                </div>

            </div>




        </>
    )
}

export default Main2
