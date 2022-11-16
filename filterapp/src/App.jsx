import React, {useState} from 'react'
import ContactForm from './components/contactFrom/ContactForm'
import Table from './components/table/Table'








function App() {

    const [contacts, setContacts] = useState([])


    const getContact = (contact) => {

        setContacts([].concat(contacts, contact))
       
    }


  return (
    <div>

    <ContactForm getContact={getContact} />


    <hr />

    <Table  contacts={contacts}/>
        
    </div>
  )
}

export default App