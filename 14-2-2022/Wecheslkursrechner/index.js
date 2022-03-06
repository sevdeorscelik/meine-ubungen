

const printHello = () => {
    console.log("Hallo WELT!");

    //Hello World in das Element greeting schreiben 
    document.getElementById("greeting").innerHTML = "Hello World"
}

//---------------------------------

const calcDollar = () => {
    // Find den Betrag des Input Feldes
    const euro = document.getElementById("euroBetrag").value;

    const dollar = euro * 1.4;
    document.getElementById("dollarValue").innerHTML = dollar + "$";
}