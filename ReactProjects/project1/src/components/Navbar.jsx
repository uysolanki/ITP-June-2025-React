import React from 'react'
//import './Navbar.css'
import fileMenus from '../data/data.js'
import objName from './Navbar.module.css'
const Navbar = () => {
    let menus=["File","Edit","View","Search"]
    let myOrderedListStyles={backgroundColor:'green',color:'white'}
  return (
    <div>
        {/* <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Search</li>
        </ul> */}

        {/* <ul>
            {menus.map(
                (menu)=>(<li>{menu}</li>)
            )}
        </ul> */}

        {/* <ul style={{backgroundColor:'red',color:'white'}}>
            {fileMenus.map(
                (menu)=>(<li>{menu}</li>)
            )}
        </ul> */}

         <ul style={myOrderedListStyles} className={objName.blue}>
            {fileMenus.map(
                (menu,index)=>(<li key={index}>{menu}</li>)
            )}
        </ul>

    </div>

    
  )
}

export default Navbar