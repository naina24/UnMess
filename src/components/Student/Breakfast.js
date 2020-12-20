import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem1 from '../Todoitem1';

function Breakfast()
{
  var itemsBa;
   var itemsB=localStorage.getItem('itemsBr');
   if(itemsB!=null)
     itemsBa=itemsB.split(',');
     else
     itemsBa=["None"];
   return(
       <div className="grid-container">
           <header className="header">
               <h1>Breakfast Menu</h1>
               <h4>Download Menu</h4>
           </header>
           <div>
           {itemsBa.map(item => {
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

export default Breakfast;