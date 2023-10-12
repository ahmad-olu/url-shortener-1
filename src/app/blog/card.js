'use client'


import React, { useState } from "react";


function Card({title}) {
    const [count, setCount]=useState(1)
    const handleClick = (event)=>{
        event.preventDefault();
        setCount(count+ 1)
    }



    if(!title)return (<div> Empty Data</div>) 
  return <div>
    <h1 onClick={handleClick}> {title} </h1>
   {count}
  </div>;
}

export default Card;
