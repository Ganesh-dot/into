import { PureComponent } from "react";
import "./App.css";
import FRParentInput from "./component/FRParentInput";
import ParentComp from "./component/ParentComp";
import PortalDemo from "./component/PortalDemo";
import RefsDemo from "./component/RefsDemo";

function App() {
  return (
    <div className="App">
      <h1>App Portal demo</h1>
      <PortalDemo />
    </div>
  );
}

export default App;
