import React, {useState} from "react";

import {Col, Image, Container, Row} from "react-bootstrap";

const Gallery = () => {
    const images = require('../../data/google-images.json');
    const [year, setYear] = useState("2020");

    const handleYearSetting = (event)=> {
        setYear(event.target.value.toString());
    }

    return (
        <div>
            <h1>Gallery</h1>
            <ul>
                <li value="2017" onClick={(e)=>{ handleYearSetting(e)}}>2017</li>
                <li value="2018" onClick={(e)=>{ handleYearSetting(e)}}>2018</li>
                <li value="2019" onClick={(e)=>{ handleYearSetting(e)}}>2019</li>
                <li value="2020"onClick={(e)=>{ handleYearSetting(e)}}>2020</li>
            </ul>
            <Container>
                <Row>

            {images[year] ? images[year].map(img => {
                return (
                         <Col md={3} >
                             <Image src={img} />
                         </Col>
                )
            }) : <div> No Images Available</div>}
                </Row>
            </Container>

        </div>
    )
}

export default Gallery;
