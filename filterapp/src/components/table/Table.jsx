import React, {useState} from 'react'


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
        <div>

        <div>
        <label>Filtering Data:</label><br />
                <select value={filter} onChange={hendleChange}>

                    <option value='All'>All</option>
                    <option value=''>None</option>
                    <option value='bath'>Bath & Body</option>
                    <option value='health'>Health & Beauty</option>
                    <option value='home&lifestyle'>Home & Lifestyle</option>
                    <option value='electronic'>Electronic Devices</option>

                </select>
        <input type='search' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />        


        </div>
            <table>
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
        </div>
    )

}


export default Table