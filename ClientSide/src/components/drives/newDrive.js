import React from 'react'
import { useRef } from 'react'

export default function NewDrive() {
    const newDrive =   {
        "startingPoint": 21,
        "destinationPoint": 31,
        "numberOfPassengers": 5,
        "oneTimePermanent": true,
        "carOwner": "Ch254@gmail.com",
        "carOwnerNavigation": null,
        "destinationPointNavigation": null,
        "startingPointNavigation": null
      }
      const json = JSON.stringify(newDrive)
    function create() {
        fetch('http://localhost:5055/api/drives', {  

            method: 'POST',
            mode: 'cors',
            body: json
        })
    }

    // const carOwnerRef = useRef();
    // const startingPointRef = useRef();

    // const newDrive=()=>{
    //     const CarOwner = carOwnerRef.current.value;
    //     const StartingPoint = startingPointRef.current.value;
    //     console.log(CarOwner,  StartingPoint);


    {/*  fetch('http://localhost:5055/api/drives', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                CarOwner: driveRef.current.CarOwner.value,
                StartingPoint: driveRef.current.StartingPoint.value,
                DestinationPoint: driveRef.current.DestinationPoint.value,
                NumberOfPassengers: driveRef.current.NumberOfPassengers.value,
                Type: driveRef.current.Type.value
            })
        })
           .then((res) => {
                return res.json();
            })
           .then((data) => {
                console.log(data);
            })
           .catch((err) => {
                console.log(err);
            })*/}

return (
    <div>

        <div>NewDrive</div>
        {/* <input ref={carOwnerRef} type="text" placeholder='CarOwner' name='CarOwner' />
        <input ref={startingPointRef} type="text" placeholder='StartingPoint' />
        <input ref={driveRef} type="text" placeholder='DestinationPoint'></input>
                <input ref={driveRef} type="number" placeholder='NumberOfPassengers'></input>
                <select ref={driveRef} >
                    <option value="one time">one time</option>
                    <option value="permanent">permanent</option>
                </select>*/}
        <button onClick={create}>Add a new drive</button>

    </div>

)
}
