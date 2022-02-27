import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import { Navbar, Nav } from "react-bootstrap";
// import Scroll from 'react-scroll';
import '../../style/header.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/past'}>Past</Link>
                </li>
                <li>
                    <Link to={'/gallery'}>Gallery</Link>
                </li>
                <li>
                    <HashLink smooth to={'/#faq'}>FAQ</HashLink>
                </li>
                <li style={{float: 'right'}}>
                    <Link to={'/'}>www.bisonhacks.com</Link>
                </li>
            </ul>
        </div>
    )
}

export {Header as default}
