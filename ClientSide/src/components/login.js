// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import '../App.css';
// import HomePage from './homePage';

// export default function Login() {
//   const [form, setForm] = useState({
//     userName: '',
//     password: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const loginData = {
//       userName: form.userName,
//       password: form.password,
//       email: form.email,
//     };

//     try {
//       const response = await axios.post('http://localhost:5055/api/drives', loginData);
//       console.log('Login data submitted:', response.data);
//       // Handle successful login here (e.g., redirect to another page)
//     } catch (error) {
//       console.error('There was an error submitting the login form!', error);
//       // Handle login error here
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="userName">Username:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="userName"
//             name="userName"
//             value={form.userName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//         <span> </span>
//         {/* <button onClick={HomePage} className='btn btn-primary'>Sign Up</button> */}
//         <button className='btn btn-primary'>Sign Up</button>

//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Login() {
  const [form, setForm] = useState({
    userName: '',
    password: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      userName: form.userName,
      password: form.password,
      email: form.email,
    };

    try {
      const response = await axios.post('http://localhost:5055/api/drives', loginData);
      console.log('Login data submitted:', response.data);
      // Handle successful login here (e.g., redirect to another page)
    } catch (error) {
      console.error('There was an error submitting the login form!', error);
      // Handle login error here
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={form.userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <span> </span>
        <button type="button" onClick={handleSignUpRedirect} className='btn btn-primary'>Sign Up</button>
      </form>
    </div>
  );
}
