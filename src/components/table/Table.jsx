import React, {useState} from 'react'
import './Table.css'

const Table = ({contacts}) => {



    const [filter, setFiltre] = useState('All')

    const hendleChange = (e) => {
        setFiltre(e.target.value)
    }


    let filteredContacts =[]

    if(filter === 'All') {
        filteredContacts = contacts
    }else {
        filteredContacts = contacts.filter((contact) => contact.categorie === filter)
    }


    const [searchTerm, setSearchTerm] = useState('')


    if(searchTerm) {
        filteredContacts = filteredContacts.filter(
            (contact) => 
            contact.name.includes(searchTerm) ||
            contact.email.includes(searchTerm)
        )
    }


    return(
        <>

        <div className='container'>
        <div className='table-container'>
        <h1>Filtering Data:</h1><br />

                <select className='select-op' value={filter} onChange={hendleChange}>

                    <option value='All'>All</option>
                    <option value=''>None</option>
                    <option value='bath'>Bath & Body</option>
                    <option value='health'>Health & Beauty</option>
                    <option value='home&lifestyle'>Home & Lifestyle</option>
                    <option value='electronic'>Electronic Devices</option>

                </select>
        <div className='search-bar'>
        <input type='search' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>        

        </div>
        </div>
            <table className='fl-table' cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>

                {filteredContacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.address}</td>
                        <td>{contact.group}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        
        </>
    )

}


export default Table