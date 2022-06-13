import React from "react"
import { useState } from "react"


const Spa005 = () => {


    const [name, setName] = useState('')
    const [age, setAge] = useState('0')



    return (
        <div className="Spa005">
            <h3>Spa005 - Update the page based on text typed into input fields</h3>
            <div className="container-5">
                <div className="formData">
                    <div className="name">Display Name:{name} </div>
                    <div className="age">Display Age:{age}</div>
                </div>
                <br/><hr/><br/>
                <form>

                    <div className="row">
                        <div className="label">Name </div>
                        <div className="data">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="label">Age </div>
                        <div className="data">
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => {
                                    setAge(e.target.value)
                                }}

                            />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Spa005