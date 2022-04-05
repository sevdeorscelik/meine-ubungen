import './style.scss'
import axios from 'axios'

//vite kullanmiyorsak axios icin bir CDN eklemeliyiz.
//vite kullaniyorsak npm i axios yeterli


const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

const appElem = document.querySelector('#app');
appElem.innerHTML = 'Loading...';

setTimeout(() => {

(async () => {

  //fetch----------
	//const response = await fetch(url);
	//const employees = await response.json();

  //axios--------------
  const response = await axios.get(url);
  const employees = response.data;

	appElem.innerHTML = `
  <h1>Employees</h1>
  <ul>
      ${employees.map(employee => {
		  return `<li>${employee.firstName} ${employee.lastName}</li>`;
	  }).join('')} 
  </ul>
`;
})();

}, 2000);
