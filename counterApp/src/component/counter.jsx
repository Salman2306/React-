import React, { useState } from 'react'

const Counter = () => {
const[counter, setCounter] = useState(0)

function minus() {
    if (counter < 0) {
    return  
        
    }
    setCounter(counter -1)
    
}


  return (
    <div className='bg-red-500 text-center text-5xl' >
      <h1>welcome to counter App </h1>

      <button onClick={()=> setCounter(counter + 1)}> +</button>
      <h2> {counter}</h2>

      <button onClick={minus}> -</button>
    </div>
  )
}

export default Counter
