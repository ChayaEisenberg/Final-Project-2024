

import React, { useState } from 'react';

export default function Pictures(props){
    const picCount = React.Children.count(props.children)
    const childArr = React.Children.toArray(props.children)
    var [count, setCount] = useState(0);
    var [child, setChild] = useState(React.cloneElement(childArr[count]));

    function next(){
        if(count < picCount-1){
            setCount(count + 1)
            setChild(React.cloneElement(childArr[count+1]))
        }
        
    
    } 
    function previous(){
        if(count > 0){ 
            setCount(count - 1)           
            setChild(React.cloneElement(childArr[count-1]))
            
        }
    
    } 


    return(
        
        <div>
              <button className="btn btn-danger" onClick={previous}>&lt; </button>        
              {child}
              <button className="btn btn-danger" onClick={next}>&gt; </button>
               
             
                
                
        </div>
    );
}




{/* import React, { useState } from 'react';

export default function Pictures(props){
    const picCount = React.Children.count(props.children)
    const childArr = React.Children.toArray(props.children)
    var [count, setCount] = useState(1);
    var [child, setChild] = useState(React.cloneElement(childArr[0]));
    function next(){
        if(count < picCount){
            setCount(count + 1)
            setChild(React.cloneElement(childArr[count]))
        }
    
    } 
    function previous(){
        if(count > 1){
            setCount(count-1)
            setChild(React.cloneElement(childArr[count]))
           
        }
        
    } 
    return(
        
              <div>
              <button className="btn btn-danger" onClick={previous}>&lt; </button>        
              
              
              <button className="btn btn-danger" onClick={next}>&gt; </button>
               {child}
                {count}
          </div>
    );
} */}