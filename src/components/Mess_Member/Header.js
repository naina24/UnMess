import React from "react";
import './Style.css';
import MessMenu from "../../MessMenu";
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <div className="headerfood">
      <div className="rowblock">
      <h1 className="food">Breakfast</h1>
      <Link to="/ResultsB">
      <button className="btn-food-result">See Result</button>
      </Link>
      <Link to="/MessMenu1">
      <button className="btn-food">Add Item</button>
      </Link>
      </div>
      <div className="rowblock">
    <h1 className="food">Lunch</h1>
    <Link to="/ResultsL">
      <button className="btn-food-result">See Result</button>
      </Link>
    <Link to="/MessMenu">
      <button className="btn-food">Add Item</button>
      </Link>
  </div>
  <div className="rowblock">  
      <h1 className="food">Dinner</h1>
      <Link to="/ResultsD">
      <button className="btn-food-result">See Result</button>
      </Link>
      <Link to="/MessMenu2">
      <button className="btn-food">Add Item</button>
      </Link>
      
    </div>
    </div>
    

  );
}


export default Header;