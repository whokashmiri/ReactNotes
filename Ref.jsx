import {  useEffect, useState , useRef } from "react"


const Ref = () => {
    let [name , setName] = useState("myName")
    let nVar = 0;
    let rVar = useRef(10);
    
    
    useEffect(()=>{
        console.log(name);
        console.log(nVar);
        console.log(rVar);
        
        
    })
  return (
    <div>
        <h1>UseRef</h1>
        <h1>{name}</h1>
        <button onClick={()=>{
            setName("yourName")
            nVar=1;
            rVar.current= 34;
            // normal variable don't persist they change to initial value after render and rerender
            }}>Change Name</button>
    </div>
  )
}

export default Ref