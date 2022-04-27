import React, {useState} from 'react';
import './App.css';
import {CounterContr} from "./components/MondayProject/CounterWithPropsCallbacks/Counter";
import {Exam1St} from "./components/Exam1st/exam1st";

function App() {
   /* const [count, setCount] = useState<number>(0)

    const resetCount = () => {
        setCount(0)
    }
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }*/
    return (
        <div>
            {/*<SwitchOnOff isOn={false}/>*/}
            {/*<UncontrolledAccordion title={'attempt'}/>
            <UncontrolledRating/>*/}
            {/*<Counter/>*/}
            {/*<CounterContr decreaseCount={decreaseCount}
                          increaseCount={increaseCount}
                          count={count}
                          resetCount={resetCount}/>*/}
            <Exam1St max={5} min={0}/>
        </div>
    )
}

export default App;
