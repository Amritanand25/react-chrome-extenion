import React, {useState} from 'react';
import '../content.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/slices/counterSlice';

const ButtonComponent = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const count = useSelector(store => store.counter.count);


    const clickHandler  = () => {
        console.log("Hello World");
        dispatch(increment(2));
        console.log(count);
        console.log(document.querySelector('article'));
    }

  return (
    <div className='font-red bg-zinc-500 text-2xl'>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default ButtonComponent