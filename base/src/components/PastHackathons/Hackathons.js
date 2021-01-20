import React from "react";
import { Link, Route } from "react-router-dom";

import Hackathon from "./Hackathon";
const Hackathons = ({match}) => {
    return (
        <div>
           <ul>
               <li>
                   <Link to={`${match.url}/2017`}>
                       2017
                   </Link>
               </li>
               <li>
                   <Link to={`${match.url}/2018`}>
                       2018
                   </Link>
               </li>
               <li>
                   <Link to={`${match.url}/2019`}>
                       2019
                   </Link>
               </li>
               <li>
                   <Link to={`${match.url}/2020`}>
                       2020
                   </Link>
               </li>
           </ul>

                <Route path={`${match.path}/:year`} component={Hackathon}/>
                <p>Some history about Bison Hacks</p>
        </div>
    )
}


export default Hackathons;
