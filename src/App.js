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
        <button className='button' onClick={() => dispatch(increment())}>+</button>
        <button className='button' onClick={() => dispatch(decrement())}>-</button>
      </div>
      
      <div>
      {!isLogged 
        ? <button className='button' onClick={() => dispatch(logIn())}>Login</button> 
        : <div><button className='button' onClick={() => dispatch(logIn())}>Logout</button>
          <h3>Valuable Information</h3> </div>}
      </div>
        
    </div>
  );
}

export default App;
