import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoogedIn: true
    }
}
    render() {

        return this.state.isLoogedIn && <div>Welcome Vishwas</div>     
         {/*  return (
           this.state.isLoogedIn ? (
           <div>Welcome Vishwas</div>
           ) : (
           <div>Welcome Guest</div>
           )
       )
       let message 
        if(this.state.isLoogedIn){
            message = <div>Welcome Vishwas</div>
        }else{
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>
        if(this.state.isLoogedIn){
            return(
                <div>
                    Welcome Ganesh
                </div>
            )
        }else{
            return(
                <div>
                    Welcome Guest
                </div>
            )
        }
        return (
            <div>
             <div>Welcome Ganesh</div>
             <div>Welcome Guest</div>
            </div>
        ) */}
    }
}

export default UserGreeting
