import { Component } from "react";
import './App.css';

interface INumbers{
    num1: number,
    num2: number,
    sum:number,
}

class Calculator extends Component<any, any>{
    constructor(props: INumbers) {
        super(props);
        this.state = { num1: '2', num2: '2', sum: '' }
    }
    //Performing Addition
    _Add = () => {
        let n1 = parseInt(this.state.num1);
        let n2 = parseInt(this.state.num2)
        let result = n1 + n2;
        this.setState({ sum: result });

    }
    //Performing Subtraction
    _Subtract = () => {
        let n1 = parseInt(this.state.num1);
        let n2 = parseInt(this.state.num2)
        let result = n1 - n2;
        this.setState({ sum: result });

    }
    //Performing Multiplication
    _Multiply = () => {
        let n1 = parseInt(this.state.num1);
        let n2 = parseInt(this.state.num2)
        let result = n1 * n2;
        this.setState({ sum: result });

    }
    //Performing Division
    _Divide = () => {
        let n1 = parseInt(this.state.num1);
        let n2 = parseInt(this.state.num2)
        let result = n1 / n2;
        this.setState({ sum: result });

}
   //onChange handler for first input box
    handleChangeInput1 = e => {
        var temp = e.target.value;
        this.setState({ num1: temp });
    };
    //onChange handler for first input box
    handleChangeInput2 = e => {
        var temp = e.target.value;
        this.setState({ num2: temp });
    };
    render() {
        const { num1, num2,sum } = this.state;

        return (
        <div className="App">
            <h1>Class Component</h1>
            <h2>Output:{this.state.sum}</h2>
            <div className="NumberInputs">
                <input type="text" name="number1"
                onChange={this.handleChangeInput1.bind(this)} value={num1} />
                <input type="text"
                name="number2"
                onChange={this.handleChangeInput2.bind(this)} value={num2} />                
            </div>
            <div>
                <button onClick={this._Add}>Add</button>
                <button onClick={this._Subtract}>Subtract</button>
                <button onClick={this._Multiply}>Multiply</button>
                <button onClick={this._Divide}>Divide</button>
            </div>
        </div>
     )
    }
}

export default Calculator;