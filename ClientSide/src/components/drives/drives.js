import React from 'react'
import { useState, useEffect } from 'react';

export default function Drives() {
  const [drives, setDrives] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5055/api/drives')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDrives(data);
      });
  }, []);
  return (
    drives.map(drive => (<div>starting Point:{drive.startingPoint}, destination Point:{drive.destinationPoint}</div>))
  );
};

