import React,{ useState } from 'react';
import './App.css';

const App = () => {
  const array = useState(0);
  const counter = array[0];
  const setCounter = array[1];

function increaseCounter(){
  setCounter(counter + 1);

}
function decreaceCounter(){
  setCounter(counter -1);
}
console.log(array)
  return (
    <div className='border-2 border-green-500 px-3  rounded-lg py-2 w-[1100px] ml-56'>
      <h1 className='text-center font-extrabold text-6xl mt-9 text-blue-600'>
        counter : {counter}
      </h1>
      <div className=' flex mx-auto items-center gap-x-96 '> 
         <button onClick={increaseCounter}  className='text-center font-extrabold text-6xl mt-9 ml-[60px] border-2 border-yellow-500 px-3  rounded-lg py-2 '>increace</button>
      <button onClick={decreaceCounter}  className='text-center font-extrabold text-6xl mt-9 border-2 border-yellow-500 px-3  rounded-lg py-2  '>decreace</button></div>
    



    </div>
  )
}

export default App

