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

  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate")
      return true
    }

  getSnapshotBeforeUpdate(){
    console.log("LifeCycleA getSnapshotBeforeUpdate")
      return null
    }

  componentDidUpdate(){
    console.log("LifeCycleA componentDidUpdate")
    }

    changeState = () => {
       this.setState({
         name: "Codevolution"
          })
        }

  render() {
    console.log("LifeCycleA Render")
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
