import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import {Image} from "react-bootstrap";
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
                        <Link to={'/'}><h1>Bison Hacks</h1><h2>2021</h2></Link>
                    </li>
                    <li>
                        <HashLink smooth to={'/#faq'}>FAQ</HashLink>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        )
}

export {Header as default}
