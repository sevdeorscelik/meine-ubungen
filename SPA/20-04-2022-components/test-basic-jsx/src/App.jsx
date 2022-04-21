import './App.scss'



function App() {
  const title = 'Info Site'
  const colors = ['red', 'green', 'yellow', 'orange'];
  //const colors =[]

  return (
    <div className="App">
      <h1>{title}</h1>
      Colors:
      {colors.length > 0 && (
        <ul>
          {colors.map(color => {
            return (
              <li>{color}</li>
            )
          })
          }
        </ul>

      )}

    </div>
  )
}

export default App

//14.satirdaki kod, colors arrayi bos oldugunda liste göstermeyecek.
