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
<div className='container'>

<ContactForm getContact={getContact} />


</div>
<div className='container'>
<Table  contacts={contacts}/>
</div>
        
    </>
  )
}

export default App