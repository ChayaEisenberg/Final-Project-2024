import React from 'react'
import Drives from './drives/drives'
import NewDrive from './drives/newDrive'

export default function HomePage() {
  const getDrive=()=>{
     return(
        <Drives></Drives>
      )
      }
      getDrive()
  return (
    <div>HomePage
      
      {/* <button onClick={getDrive}>Drives</button> */}

        <Drives></Drives>
        <NewDrive></NewDrive>

    </div>
    

  )
}
