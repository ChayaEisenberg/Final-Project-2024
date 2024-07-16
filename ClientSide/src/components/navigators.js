import HomePage from "./homePage";
import NewDrive from './drives/newDrive';
import { Link, Routes, Route } from "react-router-dom";
import Drives from "./drives/drives";
import Login from "./login";
import Signup from "./sinup";
import RemoveDrive from "./drives/removeDrive";

export default function Navigators(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newDrive" element={<NewDrive />} />
            <Route path="/drives" element={<Drives />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/removeDrive" element={<RemoveDrive />} />
        </Routes>
    );
}
