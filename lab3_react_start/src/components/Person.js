import React from 'react'

 const Person=props =>{
    return ( 
    <div>
    <p>I am {props.name}</p>
    <p>I am {props.age}, {Math.floor(Math.random() *5)}</p>
    <p style={{color:"red"}}>My job is {props.children}</p>
    </div>
    )
}

export default Person