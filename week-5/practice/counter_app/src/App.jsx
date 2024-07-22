import './App.css'

// import {useState} from "react";
import React from "react";

function App(){

  // set the state of a button 
  const [count, setCount] = React.useState(0);

  // Render
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

// Component that takes the state 
function CustomButton(props){
  // state update
  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Count {props.count}</button>
}


export default App
