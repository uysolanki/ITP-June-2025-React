import React from 'react'
import './Menubar.css'
const Menubar = ({elements,handleClick}) => {
    console.log(elements)
  return (
    <>
        <ol>
            {elements.map(
                (ele,index)=><li key={index} onClick={()=>handleClick(ele)}>{ele}</li>
            )}
        </ol>
    </>
  )
}

export default Menubar