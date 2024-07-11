import HomePage from "./homePage";
import NewDrive from './drives/newDrive';
import { Link, Routes, Route } from "react-router-dom";
import Drives from "./drives/drives";
import Login from "./login";

export default function Navigators(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newdrive" element={<NewDrive />} />
            <Route path="/drives" element={<Drives />} />
            <Route path="login" element={<Login />} />
        </Routes>
    );
}
