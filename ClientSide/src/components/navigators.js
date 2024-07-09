import HomePage from "./homePage";
import NewDrive from './drives/newDrive';

import { Link, Routes, Route } from "react-router-dom";

export default function Navigators(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newdrive" element={<NewDrive />} />
        </Routes>
    );
}
