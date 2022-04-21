import './App.scss'
import employees from './data/employees.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Employee } from './components/Employee'
//export default yapmiyorsak, import ederken geschweifte klammer icine yazmaliyiz


let status = 'internalUser';


function App() {

  function change() {
    if (status === 'internalUser') {
      status = 'externalUser'
    } else if (status === 'externalUser') {
      status = 'internalUser'
    }
  }

  return (

    <div className="App">
      <button onClick={change}>change</button>
      <Header status={status} />
      <ul>
        {employees.map((emp, index) => {
          return <Employee emp={emp} key={index} index={index} status={status} />
        })}
      </ul>
      <Footer status={status} />
    </div>
  );
}

export default App;