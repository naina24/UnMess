import React from 'react'
import TodoItem from '../TodoItem'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem1 from '../Todoitem1';
var itemsL;

function Lunch(){
   var itemsLa;
   itemsL=localStorage.getItem('itemsN');

   if(itemsL!=null)
      itemsLa=itemsL.split(',');
   else
      itemsLa=["None"];
    return(
        <div className="grid-container">
            <header className="header">
                <h1>Lunch Menu</h1>
                <h4>Download Menu</h4>
            </header>
            <div>
            {itemsLa.map(item => {
          return (
            <TodoItem1
              title={item}  
            />
          );
        })
      }
           </div>
        </div>
    );
}

export default Lunch;