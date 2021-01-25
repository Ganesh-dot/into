import logo from './logo.svg';
import './App.css';
import { Greet } from "./component/Greet"
import Welcome from "./component/Welcome";
import HelloJSX from "./component/HelloJSX";
import Message from "./component/Message";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" />
     {/* <Greet name="Clark" heroName="Superman" />
      <Greet name="Diana" heroName="Wonder Women" />
      <HelloJSX /> 
      <Message />*/}
      <Counter />
      <Welcome name="Clark" heroName="Superman" />
    </div>
  );
}

export default App;
