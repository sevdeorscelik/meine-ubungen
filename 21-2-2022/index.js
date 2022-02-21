// Loop with Arrays and Objects

//beispiel: einkaufliste

const einkaufsliste = [ //Liste meiner Einkäufe
    {
        name: "Eier",
        preis: 2.89
    },
    {
        name: "Kaffe",
        preis: 1.80
    },
    {
        name: "Mehl",
        preis: 0.45
    },
    {
        name: "Milch",
        preis: 0.90
    }

];

//console.log(einkaufsliste);


//alisverisim ne kadar tuttu ?

let summe = 0;
for (let product of einkaufsliste) {

    console.log("ganzes objekt", product);
    console.log("Name",  product.name);
    console.log("preis", product.preis);
   summe += (product.preis);
   
}

console.log(summe.toFixed(2));

