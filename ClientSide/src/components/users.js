
import { useState, useEffect } from 'react';
const Fetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5055/api/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    users.map(user => (<div>: {user.email}</div>))
  );
};
export default Fetch;