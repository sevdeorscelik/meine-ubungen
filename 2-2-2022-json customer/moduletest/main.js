import {customers} from './customers.js';
import { orders } from './orders.js';

console.log(customers.length);

//1
//console.log(`There are ${customers.length} customers and ${orders.length} orders.`);


const getNumberOfCustomersInCity = (city) => {
    const numcust = customers.filter(m => m.address.city === city).length;
	return `There are ${numcust} customers in ${city}.`;
}

console.log(getNumberOfCustomersInCity('London'));
console.log(getNumberOfCustomersInCity('Berlin'));
console.log(getNumberOfCustomersInCity('Nantes'));
console.log(getNumberOfCustomersInCity('Paris'));




//console.log(`There were ${orders.filter(m => m.orderDate.startsWith('1996')).length} orders in 1996.`);

const getOrdersInYearString = (year) => {
	return `There were ${orders.filter(m => m.orderDate.startsWith(year)).length} orders in year.`;
};
 console.log(getOrdersInYearString('1996'));
console.log(getOrdersInYearString('1997'));

//2
//console.log(`The customer name of ID CONSH is: ${customers.find(m => m.customerID === 'CONSH').companyName}`);


const getCompanyNameById = ( id ) => {
    return customers.find(m => m.customerID === id ).companyName
}
console.log(getCompanyNameById("BOTTM"));


[ "LAUGB", "FRANR", "GALED"].forEach(m => console.log(getCompanyNameById(m)));


//3

//console.log('abcdefghijklmnopqrstuvwxyz'.length);
//console.log('abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('-'));

const getOrderDatesByCustomerId = (customerId) => {
    const customer = customers.find(m => m.customerID === customerId);
    const order = orders.filter(m => m.customerID === customerId);

    return {
        name: customer.companyName,
        orderDates: orders.map(m => m.orderDate)
    }
};

console.log(getOrderDatesByCustomerId("BERGS"));