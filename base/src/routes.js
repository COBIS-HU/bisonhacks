import React from "react";
import { Route,BrowserRouter, Switch } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import App from "./App";
import Gallery from './components/Gallery/Gallery';
import PastHackathons from "./components/PastHackathons/Hackathons";
import Contact from './components/Contact/Contact';


const routes = (
    <div>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/past" component={PastHackathons} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div>
);

export default routes;
