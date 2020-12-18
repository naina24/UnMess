import React from "react";
import './Style.css';
import MessMenu from "../../MessMenu";

function Header() {
  return (
    
    <header>
      <div className="row block">
      <h1 className="food">Breakfast</h1>
      <Link to="/MessMenu">
      <button>Add Item</button>
      </Link>
      </div>
      <div className="block row">
    <h1 className="food">Lunch</h1>
    <Link to="/MessMenu">
      <button>Add Item</button>
      </Link>
  </div>
  <div className="row block">  
      <h1 className="food">Dinner</h1>
      <Link to="/MessMenu">
      <button>Add Item</button>
      </Link>
      
    </div>
    </header>
    

  );
}


export default Header;