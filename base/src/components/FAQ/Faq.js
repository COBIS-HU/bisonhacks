import React from "react";
import {Tab, Tabs} from "react-bootstrap";

import General from "./data/general";
import Applying from "./data/applying";
import Rules from "./data/rules";
import Logistics from "./data/logistics";
import Mentor from './data/mentor';
import Sponsor from "./data/sponsor";




const Faq = ()=> {
    return (
        <Tabs defaultActiveKey="general">
            <Tab eventKey="general" title="General">
                <General/>
            </Tab>
            <Tab eventKey="applying" title="Applying">
                <Applying/>
            </Tab>
            <Tab eventKey="rules" title="Rules" >
                <Rules/>
            </Tab>
            <Tab eventKey="logistics" title="Logistics" >
                <Logistics/>
            </Tab>
            <Tab eventKey="mentor" title="Mentor" >
                <Mentor/>
            </Tab>
            <Tab eventKey="sponsor" title="Sponsor" >
                <Sponsor/>
            </Tab>
        </Tabs>
    )
}

export {Faq as default}
