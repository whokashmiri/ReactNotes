// import Counter from './Components/Counter'
import './App.css'
import Login from './Components/Login'
import { Profile } from './Components/Profile'
import UserContextProvider from './Components/Provider'
// import Callback from './Components/Callback'

// import { Effect } from './Components/Effect'
// import Ref from './Components/Ref'

function App() {
  // const [count, setCounter]= useState(0)
  // const increment = ()=>{
  //   setCounter(count+1)
  // }
 
 
  

  return (
    <>
      {/* <Counter btnText="waok"/> */}
      {/* <Counter count={ count} increment={increment}/>
     <h1>Hello</h1> */}
     {/* <Effect/> */}
     {/* <Ref/> */}
     {/* <Callback/> */}
     <UserContextProvider>
    
     <h1>Context</h1>
     <Login/>
     <Profile/>
     </UserContextProvider>
     
  
    </>
  )
}

export default App
