import React from 'react'
import { useState } from 'react'
import Button from './Button'

const Counter = () => {
    let [count,setCount]=useState(0)
    function handleIncrement()
    {
        if(count<10)
       setCount(++count)
    }

    function handleDecrement()
    {
       if(count>0)
       setCount(--count)
    }

    function handleIncrementBy2()
    {
        setCount(count=count+2)
    }

    function handleDecrementBy2()
    {
        setCount(count=count-2)
    }
  return (
    <div>
        <button style={{backgroundColor:'red'}} onClick={handleIncrement}>Increment</button>
        <button style={{backgroundColor:'blue'}}onClick={()=>{if(count<10) setCount(++count)}}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button style={{backgroundColor:'yellow'}}onClick={handleIncrementBy2}>Increment By 2</button>
        <button style={{backgroundColor:'green'}}onClick={handleDecrementBy2}>Decrement By 2</button>
        <span>{count}</span> 

        <Button mytext="Increment" handleClick={handleIncrement} bgc='red'/>
        <Button mytext="Decrement" handleClick={handleDecrement} bgc='blue'/>
        <Button mytext="home"/>
    </div>
  )
}

export default Counter