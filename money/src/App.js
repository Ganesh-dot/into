import logo from './logo.svg';
import './App.css';
import { Greet } from "./component/Greet"
import Welcome from "./component/Welcome";
import HelloJSX from "./component/HelloJSX";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';

function App() {
  return (
    <div className="App">
    <NameList />
  {/* <UserGreeting />
      <ParentComponent />
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman" />
      <Greet name="Diana" heroName="Wonder Women" />
      <HelloJSX /> 
      <Message />
      <Counter />
      <Welcome name="Clark" heroName="Superman" />
      <FunctionClick />
      <ClassClick />
      <EventBind />*/}
    </div>
  );
}

export default App;
