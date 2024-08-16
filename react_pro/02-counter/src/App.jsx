import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  
  const increaseCount = () => {
    if (count < 20){
      setCount(count + 1);
    }
  }
  const decreaseCount = () => {
    if(count > 0) setCount(count - 1);
  }
  return (
    <>
      <h3>Counter: {count}</h3>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </>
  )
}

export default App
