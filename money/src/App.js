import { PureComponent } from 'react';
import './App.css';
import FRParentInput from './component/FRParentInput';
import ParentComp from './component/ParentComp';
import RefsDemo from "./component/RefsDemo"

function App() {
  return (
    <div className="App">
       <FRParentInput /> 
    </div>
  );
}

export default App;
