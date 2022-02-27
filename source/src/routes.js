import React from "react";
import { Route,BrowserRouter, Routes } from "react-router-dom";

import Header from './Pages/Main/header';
import Footer from './Pages/Main/footer';
// import App from "./App";
// import Gallery from './components/Gallery/Gallery';
// import PastHackathons from "./components/PastHackathons/Hackathons";
// import Contact from './components/Contact/Contact';


const routes = (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                {/*<Route exact path="/" component={App} />*/}
                {/*<Route path="/gallery" component={Gallery} />*/}
                {/*<Route path="/past" component={PastHackathons} />*/}
                {/*<Route path="/contact" component={Contact} />*/}
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
);

export default routes;
