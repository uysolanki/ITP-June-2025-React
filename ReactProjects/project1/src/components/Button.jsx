import React from 'react'

const Button = ({bgc,handleClick,mytext}) => {
  return (
    <button style={{backgroundColor:bgc}} onClick={handleClick}>{mytext}</button>
  )
}

export default Button