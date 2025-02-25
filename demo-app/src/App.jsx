import { DOM_KEY_LOCATION } from '@testing-library/user-event/dist/keyboard/types';
import './App.css';
// import Demo from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'.
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'


function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}

      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}

      
       {/* <Greet name= "Diana" heroName="Wonder Woman"/> */}
      {/* <Hello className="Bravo" heroName="Batman">
      <p>This is children props</p>
      </Hello>
      <Hello className="Clark" heroName="Superman"/>
      <button>Action</button>
      <Hello className="Anit" heroName="Superwoman"/>
      <Welcome className="Bravo" heroName="Batman"/>
      <Welcome className="Clark" heroName="Superman"/>
      <Welcome className="Anit" heroName="Superwoman"/> */}
      {/* <Welcome name="Bravo" heroName="Superman"/> */}
    </div>
  );
}

export default App;

