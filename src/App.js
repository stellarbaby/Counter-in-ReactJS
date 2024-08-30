
import './App.css';
import { useState, useEffect } from 'react';


const Person = (props) => {
  return (
     <> 
     <h1> Name : {props.name} </h1>
    <h2>Lastname : Heritage </h2>
    <h2>Age : {props.age} </h2>
    </>
    )}


const App = () => {
const name = "Oluwatobiloba Heritage";
const [counter, setCounter] = useState(0);

useEffect(() => {
  setCounter(100);
}, []); 

  return (
    <div className="App">
     <>
     <Person name="Stellar the Dev" age={25}/>
     <Person name="Oluwatobiloba Stellar" age={20}/>
    
     <h1>Hello, I am {name}</h1>
     <h2>This is the beginning of my journey as a blockchain developer</h2>
     </>
     <>
     <button onClick={() => setCounter((prevCount) => prevCount - 1 )}>-</button>
     <h1>{counter}</h1>
     <button onClick={() => setCounter((prevCount) => prevCount + 1 )}>+</button>
     </>
      </div>
      );
}

export default App;
