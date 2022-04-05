import './style.css'
const customersUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json';
const ordersUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';

// const customersLocalUrl = 'http://localhost:5011/customers';
// const ordersLocalUrl = 'http://localhost:5011/orders';

const getCustomers = async () => {
  const response = await fetch(customersUrl);
  return await response.json();
};
const getOrders = async () => {
  const response = await fetch(ordersUrl);
  return await response.json();
};

const customers = await getCustomers();
const orders = await getOrders();

document.querySelector('#app').innerHTML = `
  <h1>Customers and Orders Information</h1>
  <div>There are ${customers.length} customers and ${orders.length} orders.</div>
`;

const addItem = async (item, collection) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(item),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  };
  const response = await fetch(`http://localhost:5011/${collection}`, requestOptions);
  return await response.json();
};

const deleteMessage = async (id) => {
  const requestOptions = {
    method: 'DELETE'
  };
  const response = await fetch(`http://localhost:5011/messages/${id}`, requestOptions);
  return await response.json();
};

//  addMessage({
// text: "this is a message from the front end333",
//     author: "Klaus444"
// });
customers.forEach(customer => {
  addItem(customer, 'customers');
});
orders.forEach(order => {
  addItem(order, 'orders');
});

// deleteMessage(5);
