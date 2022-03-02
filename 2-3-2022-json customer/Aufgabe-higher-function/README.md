# Practice array functions with modules

Use JavaScript modules to practice using the ES6 higher-order functions.

## Set up new npm project in new directory

- make sure you are in an empty folder to create a new npm project
- type `npm init -y` to create a basic `package.json` file
- in the `package.json` file add the entry `"type":"module",` **so that you can use ES6 import/export**

![grafik](https://user-images.githubusercontent.com/446574/156308171-389fccff-b314-4b6e-9745-2ccd9a10eb77.png)

- create a test module called `test.js`
```
export const test = 'module works';
```
- create your main file called `main.js` and import and use the test module
```
import { test } from './test.js';

console.log(test);
```
- type `node main.js` and you should see:

![grafik](https://user-images.githubusercontent.com/446574/156309658-48e08584-5f2f-4d50-b300-b36c7952ca06.png)


## Setup data modules (customers, orders, products)

- create `customers.js` module by copying [this customers JSON text](https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json) into a file exporting it as an array:

![grafik](https://user-images.githubusercontent.com/446574/156311218-6ad51e6d-5a85-43c4-83a9-42f2239a9e74.png)

- in `main.js` import the customers array and display the number of customers:
```
import { customers } from './customers.js';

console.log(`There are ${customers.length} customers.`);
```
- execute `node main.js` and you should see:

![grafik](https://user-images.githubusercontent.com/446574/156311349-9dac871a-f114-476c-aef8-7c454644aca6.png)

- in similar way, create data modules for [orders](https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json) and [products](https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json)
- your `main.js` should look like this:

![grafik](https://user-images.githubusercontent.com/446574/156313091-fad26490-9f57-4677-9b1f-b013699714f2.png)

- and when you execute it, you should see this:

![grafik](https://user-images.githubusercontent.com/446574/156313126-674d876a-e272-4403-b7ae-9ccb636d0d67.png)


## Practice ES6 functions in JavaScript file with import/export

- (1) display all company names of customers

![grafik](https://user-images.githubusercontent.com/446574/156314478-6a7d0848-1541-4aec-954d-403e6ee5ddff.png)

- (2) display **city - customerName** 

![grafik](https://user-images.githubusercontent.com/446574/156314331-0c4d5c1b-e9d5-4423-b586-03fb6de4a2a3.png)

- (3) display **city - customerName** only for those from London

![grafik](https://user-images.githubusercontent.com/446574/156314859-23f09fa7-6f8f-4ab8-908c-f1837ff266cf.png)

- (4) create function `displayCustomerOrders(customerId)` which returns a string the following information:
    - `console.log(displayCustomerOrders('AROUT'));`
    - returns **Around the Horn (AROUT) has 14 orders**

- (5) create function `getCustomerOrderObject(customerId)` which returns an objects the following information:
    - `console.log(getCustomerOrderObject('AROUT'));`
    - returns:
```
{
  id: 'AROUT',
  name: 'Around the Horn',
  orderIds: ['10741', '10743', '10920', ...]
}
```


- (6) create function `getProductsOrderedByCustomer(customerId)` which returns an array of the names of products a customer has ordered:
```
[
  'Valkoinen suklaa',
  'Guaraná Fantástica',
  'Ravioli Angelo',
  ...
]
```
