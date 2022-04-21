import './App.scss';
import kiraz from './kiraz.jpg';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <div className='image'>
        <img src={kiraz} className="kiraz" alt="img" height="200px" />
      </div>
      <div className='employees'>
        
          <ul>
          <li>
              <span> First employee: </span> {data.employees[0].firstName +' '+ data.employees[0].lastName}
          </li>
          <li>
              <span> Second employee: </span> {data.employees[1].firstName +' '+ data.employees[1].lastName}
          </li>
        </ul>
          
       
        
      </div>
      

    </div>
  );
}

export default App;