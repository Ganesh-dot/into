import React, { createElement } from "react";

const HelloJSX = () => {
   // return (
       /* <div>
            <p>
                Do Knowledge convert into practice
            </p>
        </div>
    ) */
    return React.createElement("div" , {id: "hello" , className: "DummyClass"} , createElement("h1" , null , "Ganesh"))
}
export default HelloJSX;