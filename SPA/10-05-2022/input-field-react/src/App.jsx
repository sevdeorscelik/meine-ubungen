import { useState } from 'react'
import './App.css'

function App() {


  const [name, setName] = useState('')
  const [age, setAge] = useState('0')


  return (
    <div className='App'>
      <h2>Spa005</h2>
      <div className="formData">
        <div className="name">Display Name:{name} </div>
        <div className="age">Display Age:{age}</div>
      </div>
      <form>

        <div className="row">
          <div className="label">Name </div>
          <div className="data">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="label">Age </div>
          <div className="data">
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value)
              }}

            />
          </div>
        </div>

      </form>
    </div>

  )
}

export default App

/*

*/