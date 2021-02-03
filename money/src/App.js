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
import Stylesheet from "./component/Stylesheet"
import "./appStyle.css"
import styles from "./appStyle.module.css"
import Inline from "./component/Inline"

function App() {
  return (
    <div className="App">
    <h1 className="error">Error</h1>
    <h1 className={styles.success}>Success</h1>
    <Inline />
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
