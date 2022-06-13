import React from "react"
import { NavLink } from 'react-router-dom'


const Menu = () => {

    


    return (
        <div className="Menu">
            <h3>Menu</h3>
            <div className="container-menu">
                <h4>Single Page Application :</h4>

                <div><NavLink to="/spa002"><strong>Spa002</strong> - Display object with photo and link </NavLink></div>
                <div><NavLink to="/spa004"><strong>Spa004</strong> - Display data from an array and a nested array in JSX </NavLink></div>
                <div><NavLink to="/spa005"><strong>Spa005</strong> - Update the page based on text typed into input fields </NavLink></div>
                <div><NavLink to="/spa006"><strong>Spa006</strong> - Move element up on button click </NavLink></div>
                <div><NavLink to="/spa007"><strong>Spa007</strong> - Load data from the Website API
 </NavLink></div>

                
               
                
                
                

            </div>
        </div>
    )
}

export default Menu