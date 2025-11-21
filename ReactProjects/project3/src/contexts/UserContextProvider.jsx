import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}) 
{
    const[user,setUser]=useState( {username:'Alice',password:'Alice123'} )	//data u wish to share with other components
    let fruit="Apple";
    let car="Audi"
    let num=10;

    function greet()
    {
        console.log('Welcome')
    }

    let sharedData = { fruit, car, num, greet,user,setUser};          //put all the data into an object
  return (
   
   <UserContext.Provider value={sharedData}>	
    {children}
   </UserContext.Provider>
  )
}
export default UserContextProvider