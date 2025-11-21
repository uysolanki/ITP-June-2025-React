import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'

const App = () => {
  const sharedData=useContext(UserContext)
  console.log(sharedData)
  return (
    <>
    <h1>My Fav Car is {sharedData.car}</h1>
    <h1>My Name is {sharedData.user.username}</h1>
    </>
  )
}

export default App