import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBox from './Search'
import api from './api/contacts'

function App() {

  const [contacts, setContacts] = useState([]);
  //retrieve contacts

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <div className="App">
     {/* <SearchBox/> */}
    </div>
  )
}

export default App
