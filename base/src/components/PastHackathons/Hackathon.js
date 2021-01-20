import React from "react";

const Hackathon = ({match}) => {
    const year = match.params.year;


return (
    <div>
        <h1>Bison Hacks {year}</h1>
       <h1>About</h1>
        <h1>Data</h1>
        <h1>Winners</h1>
        <h1>Sponsors</h1>
    </div>
)
}

export default Hackathon;
