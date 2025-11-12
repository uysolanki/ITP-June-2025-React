import React from 'react'

const Button = (props) => {
  return (
    <button style={{backgroundColor:props.bgc}} onClick={props.handleClick}>{props.mytext}</button>
  )
}

export default Button