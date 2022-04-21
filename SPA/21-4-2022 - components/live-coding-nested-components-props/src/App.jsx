import './App.scss'
import employees from './data/employees.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
//export default yapmiyorsak, import ederken geschweifte klammer icine yazmaliyiz

function App() {
  
  return (
    <div className="App">
      <Header />
      <ul>
        {employees.map((emp,index) => {
          return <li>{emp.firstName}</li>
        })}
      </ul>
      <Footer/>
    </div>
  )
}

export default App
