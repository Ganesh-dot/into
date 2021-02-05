import React, { Component } from 'react'
import LifeCycleB from "./LifeCycleB"


class LifeCycleA extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        name : "Ganesh"
     }
     console.log("LifeCycleA Constructor")
   }

   static getDerivedStateFromProps(props , state){
     console.log("LifeCycleA getDerivedStateFromProps") 
    return null 
   }
   
   componentDidMount(){
     console.log("LifeCycleA componentDidMount")
   }

  render() {
    console.log("LifeCycleA Render")
    return (
      <div>
        LifeCycleA
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
