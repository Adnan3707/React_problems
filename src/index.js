import React, { createContext, useContext, useRef, useState } from 'react';
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
import InputField from './Class_Component/InputField';
import ImagemouseOver from './Class_Component/ImagemouseOver';
import Dropdown from './Dropdown';
import FirstExample from './CallBack_props/FirstExample'
import ParentRefs from './Class_Component/ParentRefs';
import TestContext from './useContext/TestContext';
// import UpdateState_using_Context from './useContext/UpdateState_using_Context';
export const theme = createContext(null)
// export const ChildUpdateContext = useContext(null)
const App = () => {
  const [color, setColor] = useState("burlywood");
  const [childrenstate,Setchildrenstate] = useState('hello from parent component state for Context')
  const ref = useRef();
  function printRefs() { 
    console.log('Thia IA Child Refs',this.ref)
    }
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
  function onsubmitComponent(term){
    // event.preventDefault()
    console.log(term)
  }
  return (
    <theme.Provider value={{color,setColor}}>
      <TestContext />
      <div>
        <label class="label" for="name">
          Enter name:
        </label>
        <input id="name" type="text" />
        <Button />
        <Counter />
        <Todo items={items} />
        <Toggle />
        <ColorPicker />
        <Timer />
        <Accordian description={description} />
        <Child message={'Adnan'} />
        <StateManagement />
        <LoginForm />
        <ParentChildCommunication />
        <LifeCycle />
        <InputField />
        <ImagemouseOver Imagesrc={"https://www.simplilearn.com/ice9/free_resources_article_thumb/output-adding-html-images.PNG"} Hoversrc={"https://www.w3schools.com/tags/img_girl.jpg"} />
        <Dropdown options={["You did a great job of explaining the code in a clear and concise way", "Your code is well-formatted and easy to read", "You used the useState hook effectively to track the state of the dropdown", "You used the renderOptions() function to render a list of options for the dropdown."]} />
        <FirstExample onSubmit={onsubmitComponent} />
        <ParentRefs ref={ref} onClick={printRefs} />
        {/* <ChildUpdateContext.Provider value={childrenstate}>
    <UpdateState_using_Context/>
      </ChildUpdateContext.Provider>  */}
      </div>
    </theme.Provider>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
