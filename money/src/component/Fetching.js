import React, { Component } from 'react'

export class Fetching extends Component {
    render() {
        fetch("./Data.js")
        .then(response => response.json())
        .then(data => console.log)
        return (
            <div>
                
            </div>
        )
    }
}

export default Fetching
