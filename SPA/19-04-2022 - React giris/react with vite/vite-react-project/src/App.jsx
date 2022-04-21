import { useState } from 'react'
import './App.scss'
import data from './data.json'

function App() {

  return (
    <div className="App">
      <div>Demo App Vite</div>
      <ol>
        <li>
          {data.employees[0].firstName} {data.employees[0].lastName}
        </li>
        <li>
        {data.employees[1].firstName} {data.employees[1].lastName}
        </li>
      </ol>
    </div>
  )
}

export default App
