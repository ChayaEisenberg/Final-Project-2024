// import React from 'react';
// import axios from 'axios';
// import { useRef } from 'react';

// export default function NewDrive() {
//     const newDrive =   {
//         "startingPoint": form.startingPoint,
//         "destinationPoint": 31,
//         "numberOfPassengers": 5,
//         "oneTimePermanent": false,
//         "carOwner": "M45",
//         "carOwnerNavigation": null,
//         "destinationPointNavigation": null,
//         "startingPointNavigation": null
//       }

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5055/api/drives', newDrive);
//             // setMessage('Course created successfully!');
//             console.log('Form data submitted:', response.data);
//         } catch (error) {
//             // setMessage('Failed to create course.');
//             console.error('There was an error submitting the form!', error);
//         }
//     };
   

// return (
//     <div>
//         <form>
//             <label>
//                 Starting Point:
//                 <input type="text" name="startingPoint" />
//             </label>
//             <label>
//                 Destination Point:
//                 <input type="text" name="destinationPoint" />
//             </label>
//             <label>
//                 Number of Passengers:
//                 <input type="number" name="numberOfPassengers" />
//             </label>
//             <label>
//                 One Time Permanent:
//                 <input type="checkbox" name="oneTimePermanent" />
//             </label>
//             <label>
//                 Car Owner:
//                 <input type="text" name="carOwner" />
//             </label>
//             <button type="submit">Submit</button>
//         </form>

//         {/* <div>NewDrive</div>
//         <input ref={carOwnerRef} type="text" placeholder='CarOwner' name='CarOwner' />
//         <input ref={startingPointRef} type="text" placeholder='StartingPoint' />
//         <input ref={driveRef} type="text" placeholder='DestinationPoint'></input>
//                 <input ref={driveRef} type="number" placeholder='NumberOfPassengers'></input>
//                 <select ref={driveRef} >
//                     <option value="one time">one time</option>
//                     <option value="permanent">permanent</option>
//                 </select> */}
//         <button onClick={handleSubmit}>Add a new drive</button>

//     </div>

// )
// }






import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default function NewDrive() {
    const [form, setForm] = useState({
        startingPoint: '',
        destinationPoint: '',
        numberOfPassengers: 1,
        oneTimePermanent: false,
        carOwner: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDrive = {
            startingPoint: form.startingPoint,
            destinationPoint: form.destinationPoint,
            numberOfPassengers: form.numberOfPassengers,
            oneTimePermanent: form.oneTimePermanent,
            carOwner: form.carOwner,
            carOwnerNavigation: null,
            destinationPointNavigation: null,
            startingPointNavigation: null,
        };

        try {
            const response = await axios.post('http://localhost:5055/api/drives', newDrive);
            console.log('Form data submitted:', response.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="startingPoint">Starting Point:</label>
                    <input type="text" className="form-control" id="startingPoint" name="startingPoint" value={form.startingPoint} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="destinationPoint">Destination Point:</label>
                    <input type="text" className="form-control" id="destinationPoint" name="destinationPoint" value={form.destinationPoint} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="numberOfPassengers">Number of Passengers:</label>
                    <input type="number" className="form-control" id="numberOfPassengers" name="numberOfPassengers" value={form.numberOfPassengers} onChange={handleChange} />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="oneTimePermanent" name="oneTimePermanent" checked={form.oneTimePermanent} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="oneTimePermanent">One Time Permanent</label>
                </div>
                <div className="form-group">
                    <label htmlFor="carOwner">Car Owner:</label>
                    <input type="text" className="form-control" id="carOwner" name="carOwner" value={form.carOwner} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
