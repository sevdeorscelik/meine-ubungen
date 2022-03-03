import {
    customers
} from './customers.js';
import {
    orders
} from './orders.js';
import {
    products
} from './products.js';

//console.log(`There are ${customers.length} customers.`);
//console.log(`There are ${orders.length} customers.`);
//console.log(`There are ${products.length} customers.`);

//1

//customers.map( customer => console.log( customer.companyName))

//2
//customers.map( customer => console.log(`${customer.address.city} : ${customer.companyName}`))

//3.1. method
customers.filter(customer => {

    if (customer.address.city === "London")
        console.log(`${customer.address.city} - ${customer.companyName}`);

})

//3.2. method
customers.filter(m => m.address.city === "London").forEach(m => console.log(`${m.address.city} - ${m.companyName}`))


//4.1. method
const displayCustomerOrders = (customerId) => {

    const customer = customers.find(customer => customer.customerID === customerId);
    const order = orders.filter(order => order.customerID === customerId);

    return `${customer.companyName} (${customerId}) has ${order.length} orders`

}
console.log(displayCustomerOrders('AROUT'));

//4.2. method
const displayCustomerOrders2 = (customerId) => {

    return `${customers.find(m => m.customerID === customerId).companyName} (${customerId}) has ${orders.filter(m => m.customerID === customerId).length} orders.`

}
console.log(displayCustomerOrders2('AROUT'));



//5
const getCustomerOrderObject = (customerId) => {

    const customer = customers.find(customer => customer.customerID === customerId);
    const order = orders.filter(order => order.customerID === customerId);

    return {
        id: customerId,
        name: customer.companyName,
        orderIds: order.map(m => m.orderID)
    }

}

console.log(getCustomerOrderObject('AROUT'));



//6.1 method
const getProductsOrderedByCustomer = (customerId) => {

    const orderByCustomerId = orders.filter(order => order.customerID === customerId);

    const orderProductId = [];

    orderByCustomerId.forEach(m => {
        m.details.forEach(n => {
            orderProductId.push(n.productID)
        });
    });

    const result = [];

    orderProductId.forEach(t => {
        products.forEach(z => {
            if (z.productID === t)
                result.push(z.name)
        })
    })


    return result


}

console.log(getProductsOrderedByCustomer('AROUT'));

//6.2. method 

const getProductsOrderedByCustomer2 = (customerId) => {
	const orderedProducts = []
	orders.filter(m => m.customerID === customerId).forEach(order => {
		order.details.forEach(product => {
			orderedProducts.push(products.find(m => m.productID === product.productID).name);
		});
	});
	return {
		
		orderedProducts
	}
};
console.log(getProductsOrderedByCustomer2('AROUT'));