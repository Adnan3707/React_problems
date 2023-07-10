// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Buttons';
import Counter from './Counter';
import Todo from './Todo';
import Toggle from './Toggle';
import ColorPicker from './ColorPicker';
import Timer from './StopWatch';
import Accordian from './Accordian';
import Child from './Childt';
import StateManagement from './Class_Component/StateManagement';
import LoginForm from './Class_Component/LoginForm';
import ParentChildCommunication from './Class_Component/Parent_Communication';
import LifeCycle from './Class_Component/LifeCycle';
const App = () => {
  var items = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Do laundry" },
    { id: 3, title: "Walk the dog" },
  ];
  var description = [
    {
      id: 1,
      name: "John Doe",
      description: "A software engineer at Google."
    },
    {
      id: 2,
      name: "Jane Doe",
      description: "A doctor at a local hospital."
    },
    {
      id: 3,
      name: "Peter Smith",
      description: "A teacher at a local high school."
    },
    {
      id: 4,
      name: "Mary Johnson",
      description: "A stay-at-home mom."
    },
    {
      id: 5,
      name: "Bill Jones",
      description: "A retired firefighter."
    }
  ];
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <Button/>
      <Counter/>
      <Todo items={items}/>
      <Toggle/>
      <ColorPicker/>
      <Timer/>
      <Accordian description ={description}/>
      <Child message={'Adnan'}/>
      <StateManagement/>
     <LoginForm/>
     <ParentChildCommunication/>
     <LifeCycle/>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
