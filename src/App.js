import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, logIn} from './actions';

function App() {
  
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector (state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      
      <div>
        <button onClick={() => dispatch(logIn())}>Log In</button>
        {isLogged ? <h3>Valuable Information</h3> : ''} 
      </div>
        
    </div>
  );
}

export default App;
