import React from "react"
import { useState } from "react"


const Spa006 = () => {

const [top, setTop] = useState(0) 
const [left, setLeft] = useState(0) 



function moveDown () {  
    setTop(top+5)         
}

function moveRight() {
    setLeft(left+5)
}



    return (
        <div className="Spa006">
            <h3>Spa006 - Move element down on button click</h3>
            
            <div className="container-6">
                <button onClick={moveDown}>Move down</button>
                <br></br>
                <button onClick={moveRight}>Move right</button>
                <div className="box" style={{top:`${top}%`, left:`${left}%`}}  ></div>
            </div>
        </div>
    )
}

export default Spa006