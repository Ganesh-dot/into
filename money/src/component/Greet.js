import React from "react";

export const Greet = props => { 
   console.log(props)
  return  <h1> Hello {props.name} and {props.heroName} </h1>
}
