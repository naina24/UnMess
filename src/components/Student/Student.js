import React from 'react'
import './student.css'

function Student(){
    return(
        <div className="grid-container">
            <header className="header">
                <h1>Hola! Student</h1>
            </header>
            <main>
                <div className="content">
                    <div className="items">
                        <div className="items-name">Breakfast</div>
                        <a href="#breakfast" className="menu">Menu</a>
                    </div>

                    <div className="items">
                        <div className="items-name">Lunch</div>
                        <a href="#lunch" className="menu">Menu</a>
                    </div>

                    <div className="items">
                        <div className="items-name">Dinner</div>
                        <a href="#dinner" className="menu">Menu</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Student;