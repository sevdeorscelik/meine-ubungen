import fetch from 'node-fetch';
import fs from 'fs';

const customersUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json';
const ordersUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const customers = await getData(customersUrl);
const orders = await getData(ordersUrl);

const data = { customers, orders };
fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
  res.status(200).json({
    success: true,
    message
  });
});