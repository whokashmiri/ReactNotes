/* eslint-disable react/prop-types */


// export default function Counter({username="sale", btnText}) {
export default function Counter({count, increment}){
  
   
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
        {/* // <h1>{username}</h1>
        // <button  > {btnText}Click me </button> */}
    </div>
  )
}
