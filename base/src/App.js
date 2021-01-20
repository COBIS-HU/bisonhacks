import React from 'react';

import {Row, Container, Button} from "react-bootstrap";

import Faq from './components/FAQ/Faq';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div>
        <Container>
            <h1>Bison Hacks 2021</h1>
            <Button href="http://eepurl.com/gVNzVr">Subscribe</Button>
        </Container>
        <Container>
            <Row>
                <h1>Excellence in Truth and Service</h1>
                <p>Bison Hacks is....</p>
            </Row>
        </Container>
        <Container>
            <Row>
                <Stats/>
            </Row>
        </Container>
       <Container id='faq'>
           <h1>FAQ</h1>
            <Faq/>
       </Container>
    </div>
  );
}

export default App;
