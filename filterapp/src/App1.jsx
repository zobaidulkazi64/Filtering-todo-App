import React, {useState} from 'react'


const CONTACT_FROM_INIT_STATE = {
    name: '',
    email: ''
}



const ContactFrom = ({ getContact }) => {


    const [values, setValues] = useState({...CONTACT_FROM_INIT_STATE})
    const {name, email} = values


    const hendleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const hendleSubmit = (e) => {
        e.preventDefault();
        getContact(values)
        setValues({...CONTACT_FROM_INIT_STATE})

    }



    return(

      <div>
          <h1>ContactFrom</h1>
          <form onSubmit={hendleSubmit} >
            <div>
                <label>Name:</label>
                <input type='text' onChange={hendleChange} name='name' value={name} />
            </div>
            <br />
            <div>
                <label>Email:</label>
                <input type='email' name='email' onChange={hendleChange} value={email} />

            </div>
            <br />
            <input type='submit' value='Creact A New Value' />
          </form>
      </div>

        
    )
}




const Table = ({contacts}) => {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )

}




function App() {

    const [contacts, setContacts] = useState([])


    const getContact = (contact) => {

        setContacts([].concat(contacts, contact))
       
    }


  return (
    <div>

    <ContactFrom getContact={getContact} />


    <hr />

    <Table  contacts={contacts}/>
        
    </div>
  )
}

export default App