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

      <>
          <h1>ContactFrom</h1>
          <form className='fromc' onSubmit={hendleSubmit} >
            <div className='input_from'>
            <div>
                <input type='text' placeholder='Your Name' onChange={hendleChange} name='name' value={name} />
            </div>
            <br />
            <div> 
                <input type='email' placeholder='Your Email' name='email' onChange={hendleChange} value={email} />

            </div>
            <br />
            <div>
               
                <input type='text' placeholder='Your Address' name='address' onChange={hendleChange} value={address} />

            </div>
            <br />
            <div className='label-data'>
                <label>Filtering Data:</label>
                <br />
                <select 
                    className='select-data'
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
            </div>
            <br />
            <div className='submit-btn'>
            <input type='submit' value='Creact New Value' />
            </div>

          </form>

      </>

        
    )
}

export default ContactForm