import React , { Component } from "react";

class Message extends Component {

    constructor (){
        super()
        this.state = {
          message : "Welcome Visiters",
          count : 0
        }
    }

    changeMessage(){
        this.setState({
            message : "Thankyou for subscribing" 
        });
    }
    changeCount = e => {
        const count = this.state.count;
        this.setState({
            count: count + 1
        });
    };

    render() {
      return (
        <div>
          <h1> {this.state.message} </h1>
          <button onClick={() => this.changeCount()}  >{this.state.count}</button>
          <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}
export default Message;