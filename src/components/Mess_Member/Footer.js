import React from "react";
import './Style.css';

const today = new Date();
var yyyy = today.getFullYear();

function Footer(){
    return(
        <div className="footer">
        <h1>Show Results</h1>
        <h4>Copyright @{yyyy}</h4>
        </div>
    );
}

export default Footer;