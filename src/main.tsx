import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CalculatorFunctionCompo from './calculatorFunctionComponent';
import CalculatorClassCompo from './calculatorClassComponent';


ReactDOM.render(
  <React.StrictMode>
    <CalculatorClassCompo/>
  </React.StrictMode>,
  document.getElementById('root')
)
