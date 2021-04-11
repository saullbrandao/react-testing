import { useState } from "react"
import './Counter.css'

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    return (
        <div>
            <h2 data-testid='header'>My Counter</h2>
            <h1 data-testid='counter'>{counterValue}</h1>
            <button
                data-testid='subtract-btn'
                onClick={() => setCounterValue(prev => prev - inputValue)}
            >-</button>
            <input
                data-testid='input'
                type='number'
                value={inputValue}
                onChange={e => setInputValue(Number(e.target.value))}
                className='text-center'
            />
            <button
                data-testid='add-btn'
                onClick={() => setCounterValue(prev => prev + inputValue)}
            >+</button>
        </div>
    )
}

export default Counter