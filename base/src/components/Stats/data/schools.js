import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import BS from '../../../img/bowie_state_university.png'
import CS from '../../../img/catholic_university.png'
import CWM from '../../../img/college_of_william_and_mary.png';
import GMU from '../../../img/george_mason_university.png';
import GT from '../../../img/georgetown_university.png';
import HI from '../../../img/hampton_university.png';
import MSU from '../../../img/morgan_state_university.png';
import NYU from '../../../img/new_york_university.jpg';
import PSU from '../../../img/penn_state_university.png';
import Temple from '../../../img/temple_university.png';
import Towson from '../../../img/towson_university.png';
import UMD from '../../../img/university_of_maryland.png';

const Schools = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src={BS}/>
                    </Col>
                    <Col>
                        <Image src={CS}/>
                    </Col>
                    <Col>
                        <Image src={CWM}/>
                    </Col>
                    <Col>
                        <Image src={GMU}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={GT}/>
                    </Col>
                    <Col>
                        <Image src={HI}/>
                    </Col>
                    <Col>
                        <Image src={MSU}/>
                    </Col>
                    <Col>
                        <Image src={NYU}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={PSU}/>
                    </Col>
                    <Col>
                        <Image src={Temple}/>
                    </Col>
                    <Col>
                        <Image src={Towson}/>
                    </Col>
                    <Col>
                        <Image src={UMD}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schools
