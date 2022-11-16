import React, {useState} from 'react'
import ContactForm from './components/contactFrom/ContactForm'
import Table from './components/table/Table'
import './App.css'







function App() {

    const [contacts, setContacts] = useState([])


    const getContact = (contact) => {

        setContacts([].concat(contacts, contact))
       
    }


  return (
    <>

    <ContactForm getContact={getContact} />

    <br />
    <hr />

    <Table  contacts={contacts}/>
        
    </>
  )
}

export default App