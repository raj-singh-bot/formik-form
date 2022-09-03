import React, {useState} from 'react'
// import Clock from './components/Clock';
// import ContextReducer from './components/ContextReducer';
// import Counter from './components/Counter';
import  {Signup}  from "./components/Signup";
// import Demo from "./components/Demo";



function App() {
  // const [value, setvalue] = useState({});
  // function dataPass(data){
  //   setvalue(data);
  // }
  return (
    <>
      <Signup />
      {/* <Demo name="parent to child" data={dataPass}/>
      <p>data will be passed from child component :
          {value.name} {value.age}</p> */}
      {/* <Counter>hello world</Counter> */}
    {/* <Clock /> */}
    {/* <ContextReducer/> */}
    </>
  );
}

export default App;
