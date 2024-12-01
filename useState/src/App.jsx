import Counter from './Components/Counter'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCounter]= useState(0)
  const increment = ()=>{
    setCounter(count+1)
  }
 
 
  

  return (
    <>
      {/* <Counter btnText="waok"/> */}
      <Counter count={ count} increment={increment}/>
     <h1>Hello</h1>
  
    </>
  )
}

export default App
