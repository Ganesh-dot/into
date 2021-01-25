import React, { Component } from "react";

function FunctionClick() {
     function clickHandler(params) {
         console.log("Button clicked")
     }
    return (
        <div>
            <button onClick={clickHandler}>functionClick</button>
        </div>
    )
}

export default FunctionClick
