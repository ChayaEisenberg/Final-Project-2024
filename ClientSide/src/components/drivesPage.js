import React from 'react'
import Drives from './drives/drives'
import NewDrive from './drives/newDrive'

export default function DrivesPage() {
  const drives = () => {
    <Drives></Drives>;
  }
  return (
    <div>HomePage
        <br></br>
        {/* <button onClick={() =><Drives></Drives>}>Show drives</button> */}
        {/* <button onClick={drives}>Show drives</button> */}
        <Drives></Drives>
        {/* <NewDrive></NewDrive> */}
        
    </div>
    
  )
}