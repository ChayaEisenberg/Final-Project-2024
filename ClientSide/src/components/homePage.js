import React from 'react'
import Drives from './drives/drives'
import NewDrive from './drives/newDrive'

export default function HomePage() {
<<<<<<< HEAD
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

=======
  const drives = () => {
    <Drives></Drives>;
  }
  return (
    <div>HomePage
        <br></br>
        {/* <button onClick={() =><Drives></Drives>}>Show drives</button> */}
        {/* <button onClick={drives}>Show drives</button> */}
        {/* <Drives></Drives> */}
        <NewDrive></NewDrive>
        
>>>>>>> 558ae21974e206fef189462365be3244d3d6ded5
    </div>
    
  )
}
