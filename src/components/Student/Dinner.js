import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem1 from '../Todoitem1';

function Dinner(){
  var itemsDa;
   var itemsD1 = localStorage.getItem('itemsDi');
   var itemsD=itemsD1;
     if(itemsD!=null)
     itemsDa=itemsD.split(',');
     else
     itemsDa=["None"];
   return(
       <div className="grid-container">
           <header className="header">
               <h1>Dinner Menu</h1>
               <h4>Download Menu</h4>
           </header>
           <div>
           {itemsDa.map(item => {
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

export default Dinner;