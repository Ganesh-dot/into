import React, { Component } from 'react'

class EventBind extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            message: "Hello"
       }
   }
   
   changeHandler(){
     this.setState({
        message: "GoodBye"
       })
     console.log(this)
   }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/* <button onClick={this.changeHandler.bind(this)}>Click here</button> */}
               <button onClick={() => this.changeHandler()}>cLICK</button>
            </div>
        )
    }
}

export default EventBind
