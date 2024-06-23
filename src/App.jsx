import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState('rgb');
  const [color, setColor] = useState('');

  function changeMode() {
    if (mode == 'rgb') setMode('hex')
    if (mode == 'hex') setMode('rgb')
  }

  function ChangeColor() {
    let arr = ['blue', 'green','red','aqua'];
    let randomIndex = Math.floor(Math.random() * arr.length);
    setColor(arr[randomIndex]);
  }

  function GenerateColor() {
    switch (mode) {
      case 'rgb':

        setColor(() => {
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          
          return `rgb(${r},${g},${b})`;
        })
        break;
      
      case 'hex':
        setColor(() => {
          let hex = Math.floor(Math.random() * 16777215).toString(16);
          return `#${hex.padStart(6, '0')}`;
        })
        break;
    
      default:
        break;
    }
  }

  useEffect(()=>{GenerateColor()},[mode])

  const style = {
    backgroundColor: color, 
    width:'100vw', 
    height:'100vh',
  }
  return (
    <div style={style}>
      <div style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <p>Random Bg-Color Generator</p>
        <input type="checkbox" id="mode" name="mode" onChange={changeMode}/>
        <label htmlFor="mode">{mode}</label>
        <h3>Current Color: {color}</h3>
      </div>

      <button onClick={ChangeColor}>Change Color</button>
      <button onClick={GenerateColor}>Generate</button>
    </div >
  )
}

export default App
