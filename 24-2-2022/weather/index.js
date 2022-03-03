// Daten von der OpenWeather abfragen
// Webseitendaten aus dem Internet auslesen


//Method <<> fetchen ("URL")
//fetch(`ip code/link`)


fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=6ca342c4c6976ce9ec0a15d8f5d0a690`)


    //.then machen wir etwas mit unsere Antwort
    // argument in diesem Fall haben wir es response benannen
    //ist zuerst nicht in der "Sprache", die wir wollen
    //wir brauchen es in json -->.json()
    .then((response) => {
                
        response.json()
    })

    //Holen wir unsere infos in der echten Sprache/Format
    .then(function (data) {
        console.log(data);
    });