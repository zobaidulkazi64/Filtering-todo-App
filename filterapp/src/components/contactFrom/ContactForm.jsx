import React, {useState} from 'react'
import './style.css'

const CONTACT_FROM_INIT_STATE = {
    name: '',
    email: '',
    address: '',
    group: ''
}


const ContactForm = ({ getContact }) => {


    const [values, setValues] = useState({...CONTACT_FROM_INIT_STATE})
    const {name, email, address, group} = values


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
          <h1 style={{color: '#FF8000'}}>ContactFrom</h1>
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
            <div>
                <label>Address:</label>
                <input type='text' name='address' onChange={hendleChange} value={address} />

            </div>
            <br />
            <div>
                <label>Filtering Data:</label>
                <br />
                <select 
                    name='group'
                    onChange={hendleChange}
                    value={group}
                    >

                    <option>Select Categories</option>
                    <option>Bath & Body</option>
                    <option>Health & Beauty</option>
                    <option>Home & Lifestyle</option>
                    <option>Electronic Devices</option>
                </select>
            </div>
            <br />
            <br />

            <input type='submit' value='Creact New Value' />

          </form>

      </div>

        
    )
}

export default ContactForm