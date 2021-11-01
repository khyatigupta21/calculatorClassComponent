import { useState } from 'react';
import './App.css'

function App() {
    const [number1, setNumber1] = useState(0); // setting state of Number1
    const [number2, setNumber2] = useState(0); //setting state of Number2
    const [total, setTotal] = useState(0); //setting state of Total

    function _handleAddition (){
        setTotal(number1+number2)
    }
    function _handleSubtraction (){
        setTotal(number1-number2)
    }
    function _handleMultiplication() {
        setTotal(number1*number2)
    }
    function _handleDivision() {
        setTotal(number1/number2)
    }
    return (
        <div className="App">
            <h2>Output:{ total }</h2>
            <div className="NumberInputs">
                <input
                type="number"
                value={number1}
                onChange={e => setNumber1(+e.target.value)}
                placeholder="0"
                    />
                <input
                type="number"
                value={number2}
                onChange={e => setNumber2(+e.target.value)}
                placeholder="0"
                    />
            </div>
            <div>
                <button onClick={_handleAddition}>Add</button>
                <button onClick={_handleSubtraction}>Subtract</button>
                <button onClick={_handleMultiplication}>Multiply</button>
                <button onClick={_handleDivision}>Divide</button>
            </div>
        </div>
    )
}

export default App
