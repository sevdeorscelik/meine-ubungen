import React from "react"
import { NavLink } from 'react-router-dom'


const Menu = () => {

    


    return (
        <div className="Menu">
            <h3>Menu</h3>
            <div className="container-menu">
                <h4>Single Page Application :</h4>

                <div><NavLink to="/spa002"><strong>Spa002</strong> </NavLink>- Display object with photo and NavLinknk</div>
                <div><NavLink to="/spa004"><strong>Spa004</strong> </NavLink>- Display data from an array and a nested array in JSX</div>
                <div><NavLink to="/spa005"><strong>Spa005</strong> </NavLink>- Update the page based on text typed into input fields</div>
                <div><NavLink to="/spa006"><strong>Spa006</strong> </NavLink>- Move element up on button cNavLinkck</div>
                <div><NavLink to="/spa007"><strong>Spa007</strong> </NavLink>- Load data from the Website API</div>

                
               
                
                
                

            </div>
        </div>
    )
}

export default Menu