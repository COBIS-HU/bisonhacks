import React from 'react';
import {Container, Image, Row} from "react-bootstrap";

import HowardLogo from '../img/howardu_clocktower_logo.png';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Image src={HowardLogo} alt="Logo"/>
                    <p>Copyright &copy; Howard University Department of Computer Information Systems {new Date().getFullYear()}</p>
                </Row>
            </Container>
        </div>
    )
}
export {Footer as default}
