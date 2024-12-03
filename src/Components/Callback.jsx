/* eslint-disable react/no-unknown-property */
import {useCallback, useState} from 'react'
import ChildComOfCallback from './ChildComOfCallback'

const Callback = () => {
    const [first, setfirst] = useState(0)
    // function handleClick(){
    //     setfirst(first+1)
    // }
    let handleClick=useCallback(()=>{
        setfirst(first+1)
    },[])
  return (
    <div>
        <h3>Count: {first}</h3>
        <button
         onClick={handleClick}
         handleClick = {handleClick}
         >Increment</button>
        <div>
            <ChildComOfCallback buttonName = "Click"/>
        </div>
    </div>
  )
}

export default Callback