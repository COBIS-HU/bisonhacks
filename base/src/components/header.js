import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Navbar, Nav } from "react-bootstrap";
import Scroll from 'react-scroll';

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

                <div>
                    <Navbar fixed="top" >
                        <Nav className="mr-auto">
                            <Nav.Link href={'/past'}>
                                Past
                            </Nav.Link>
                            <Nav.Link href={'/gallery'}>
                                Gallery
                            </Nav.Link>
                            <Nav.Link onSelect={() => Scroll.scrollTo('homepage', {
                                smooth: true,
                                offset: -70,
                                duration: 500,
                            })}>
                                FAQ
                            </Nav.Link>
                            <Nav.Link href={'/contact'}>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        )
}

export {Header as default}
