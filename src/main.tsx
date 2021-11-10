import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import CalculatorFunctionCompo from './CalculatorFunctionComponent';
//import CalculatorClassCompo from './CalculatorClassComponent';
//import SearchBox from './Search';
import ContactList from './components/ContactList';
import App from './App';
import Users from './components/Users';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <Users/>
  </React.StrictMode>,
  document.getElementById('root')
)
