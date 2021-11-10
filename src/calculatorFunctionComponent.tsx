import { useState } from 'react';
import './App.css'
import InputText from './InputText';
import CustomSelect from './CustomSelect';
import SearchBox from './Search';

function App() {
    const [number1, setNumber1] = useState(0); // setting state of Number1
    const [number2, setNumber2] = useState(0); //setting state of Number2
    const [total, setTotal] = useState(0); //setting state of Total

    const data = [
    {
      id: "1",
      name: "One"
    },
    {
      id: "2",
      name: "Two"
    },
    {
      id: "3",
      name: "Three"
    },
    {
      id: "4",
      name: "Four"
    }
    ];
    function _handleAddition() {
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
    function onSelectChange(e:any) {
    console.log(e.target.value);
  }
    return (
        <div className="App">
            <h1>Function Component</h1>
            <h2>Output:{total}</h2>
            <p>This is a List</p>
            <div>
                <CustomSelect data={data} onSelectChange={onSelectChange} />
                <SearchBox placeholder="Enter to Search...." _handleChange={(e:any)=> e.target.value}></SearchBox>

            </div>
            <div className="NumberInputs">
                <InputText label="FirstNumber" type="number" identifier="firstNumber"
                value={number1} onChange={(e:any) => setNumber1(+e.target.value)}
                placeholder="Enter First Number"
                />
                <InputText label="SecondNumber" type="number" identifier="SecondNumber"
                value={number2} onChange={(e:any) => setNumber2(+e.target.value)}
                placeholder="Enter First Number"
                />
                {/* <input
                type="number"
                value={number1}
                onChange={(e:any) => setNumber1(+e.target.value)}
                placeholder="0"
                    /> */}
                {/* <input
                type="number"
                value={number2}
                onChange={e => setNumber2(+e.target.value)}
                placeholder="0"
                    /> */}
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
