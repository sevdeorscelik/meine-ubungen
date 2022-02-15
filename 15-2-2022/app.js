//TODO: Daten von der NASA abfragen
//Webseitendaten aus dem Internet

axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(function (response) {
        infoByNasa = response;
        console.log(infoByNasa);



        //TODO: Daten in das Dokument einpflegen
        
        document.getElementById("title").innerHTML = response.data.title;

    });