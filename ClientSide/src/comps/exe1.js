
import React, { createElement, useState } from "react";



function Exe1(prop){
    const [point, setPoint] = useState(5)
    const [name, setName] = useState ('____')
    function points(){
        setPoint(point + 1)
        return point;
    }
    return(
        <div>
            <input placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
            <br></br>
            <br></br>
            <h4 className="display-4">Hello {name}! </h4>
            <h5>points: {point}</h5>
            <button  className="btn btn-outline-dark" onClick={points}>click to increase your points</button>
            
        </div>
    )

}
export default Exe1;

