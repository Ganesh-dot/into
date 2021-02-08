import React, { Component } from 'react'

class LifeCycleB extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        name : "Ganesh"
     }
     console.log("LifeCycleB Constructor")
   }

    static getDerivedStateFromProps(props , state){
      console.log("LifeCycleB getDerivedStateFromProps") 
      return null 
    }
    
      componentDidMount(){
        console.log("LifeCycleB componentDidMount")
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

  render() {
    console.log("LifeCycleB Render")
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
