import { useState } from "react";




export default function RandomColor(){
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#ffffff'); 
    function handleCreateRandomColor(){
        if(typeOfColor === 'hex'){
           const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            setColor(randomColor);
        }else if(typeOfColor === 'rgb'){
            const randomColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
            setColor(randomColor);
        }
    }

    return (
      <div className="container" style={
        {
            width: "100vw",
            height: "100vh",
            background: color,
            transition: "background 1s ease",


        }
      }>
      <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Create Random Color</button>
      <h2 style={{
        bottom: "10px",
        left: "0",right: "0",
      }}>{color}</h2>
      </div>
    );
  }