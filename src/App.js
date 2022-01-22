import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const number = useSelector((state) => state.number);
  return (
    <div id='container'>
      <h1>Root : {number}</h1>
      <div id='grid'>
        <Left1 number={number}></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}

function Left1() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left1 : {number}</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3() {
  const dispatch = useDispatch();
  const plusBtn = () => {
    dispatch({type: 'PLUS'});
  }
  const minusBtn = () => {
    dispatch({type: 'MINUS'});
  }
  return (
    <div>
      <h1>Right3</h1>
      <input type='button' value='+' onClick={plusBtn} />
      <input type='button' value='-' onClick={minusBtn} />
    </div>
  );
}

export default App;
