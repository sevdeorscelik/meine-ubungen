
const chuksKonto = { 
    kontoinhaber : "Chuck Mustermann",
    iban : "DE01 2345 6789 0000 1111 2222",
    bankleizahl : "ABCDEFGH123",
    bankName : "Sparkasse Berlin Ost",
    kontoStand : 1000,
    dispo : 500
}


const einzahlen = (betrag) => {
    chuksKonto.kontoStand += betrag;
}

const auszahlen = (betrag) => {
    
    if(betrag <= chuksKonto.kontoStand ) {
        chuksKonto.kontoStand -= betrag;

    } else if ( betrag > chuksKonto.kontoStand && betrag <= chuksKonto.dispo + chuksKonto.kontoStand) {
        chuksKonto.kontoStand-= betrag;
        chuksKonto.dispo = chuksKonto.dispo - Math.abs(chuksKonto.kontoStand) ;

    } else {( chuksKonto.dispo + chuksKonto.kontoStand < betrag ) 
        console.log("Sie können das nicht machen");
    }}


 
//einzahlen(5)
//auszahlen(1000)
//auszahlen(1100)
//auszahlen(1500)
auszahlen(3000)
//einzahlen(500)

console.log(chuksKonto);