import React from "react"



const Spa002 = () => {

    const katze = {
        firstName:'Misha',
        genus:'British Shorthair',
        geschlecht:'weiblich',
        age: 1.5,
        photo: 'img/katze.jpeg',
        homepage:'http://www.google.com'  
    }
     

    return(
        <div className="Spa002">
            <h3>Spa002 - Display object with photo and link</h3>
            <div className="container-2">
                <img className="katzeImg" src={katze.photo} alt="" height={'200px'}/>
                <div className="info-card">
                    <p>{katze.firstName} - {katze.genus}</p>
                    <p>{katze.age} Jahre alt - {katze.geschlecht}</p>
                    <a href={katze.homepage} target={'blank'}>{katze.homepage}</a>
                </div>
            </div>
        </div>
    )
}

export default Spa002