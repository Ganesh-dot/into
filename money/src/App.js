import logo from './logo.svg';
import './App.css';
import { Greet } from "./component/Greet"
import Welcome from "./component/Welcome";
import HelloJSX from "./component/HelloJSX";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" />
      <Greet name="Clark" />
      <Greet name="Diana" />
     {/* <Welcome />
      <HelloJSX /> */}
    </div>
  );
}

export default App;
