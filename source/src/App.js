import React from 'react';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";

// import {Row, Container, Button} from "react-bootstrap";

// import Faq from './components/FAQ/Faq';
// import Stats from './components/Stats/Stats';

import BHLogo from './img/2022_logo_transparent_no_letters.png';

function App() {
  return (
      <>
       <Grid container>
           <Grid item xs={6}>
               <img src={BHLogo}/>
           </Grid>
           <Grid item xs={6}>
               <Button variant="contained" href="http://eepurl.com/gVNzVr">Subscribe</Button>
           </Grid>
       </Grid>

        {/*<Container>*/}
        {/*  <h1>Bison Hacks </h1>*/}
        {/*</Container>*/}
        {/*<Container>*/}
        {/*  <Row>*/}
        {/*    <h1>Excellence in Truth and Service</h1>*/}
        {/*    <p>Bison Hacks is....</p>*/}
        {/*  </Row>*/}
        {/*</Container>*/}
        {/*<Container>*/}
        {/*  <Row>*/}
        {/*    <Stats/>*/}
        {/*  </Row>*/}
        {/*</Container>*/}
        {/*<Container id='faq'>*/}
        {/*  <h1>FAQ</h1>*/}
        {/*  <Faq/>*/}
        {/*</Container>*/}
      </>
  );
}

export default App;
