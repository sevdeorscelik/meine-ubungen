const customers = [
    //Sarah
    {
        name: "Sarah",
        customer_since: "2017-02-11",
        isVerified: true,
        order: ["Super Racer", "bottle"],
        hasPaid: true
    },
    //Nancy
    {
        name: "Nancy",
        customer_since: undefined,
        isVerified: false,
        order: ["bike"],
        hasPaid: false
    }
];

const orders = [
    //helmet
    {
        name: "Super Racer",
        price: 28,
        target: "Unisex",
        material: "Plastik"
    },
    //bottle
    {
        name: "bottle",
        price: 9,
        color: "blue",
        size: "1L",
        material: "Holz"
    },
    //bike
    {
        name: "bike",
        price: 1280,
        size: "28 Inch",
        target: "women",
    }
];

//Wie viel müssen Sarah und Nancy zahlen?

for (let customer of customers) {
    // console.log("customer", customer);  //kundenobject
    // console.log(customer.name); // müsteri isimleri
    // console.log("Bestellung", customer.order);
let summe = 0;
    for (let productname of customer.order) {
        console.log(customer.name, productname);

        for (let product of orders) {

            if(productname === product.name){
                //console.log(product.price);
                summe += product.price;
            }
        }
    }
    console.log(`${customer.name} muss ${summe} bezahlen`);
}