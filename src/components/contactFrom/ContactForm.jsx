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
          <h1 className='text-4xl text-center'>Creact Your Product List</h1>
          <form className='fromc border-4' onSubmit={hendleSubmit} >
            <div className='input_from border-spacing-3'>
            <div>
                <input className='border-4 border-emerald-400' type='text' placeholder='Product name' onChange={hendleChange} name='name' value={name} />
            </div>
            <br />
            <div> 
                <input className='border-4 border-emerald-400' type='text' placeholder=' Special Price' name='email' onChange={hendleChange} value={email} />

            </div>
            <br />
            <div>
               
                <input className='border-4 border-emerald-400' type='text' placeholder='Regular Price ' name='address' onChange={hendleChange} value={address} />

            </div>
            <br />
            <div className='label-data'>
                <label>Filtering Data:</label>
                <br />
                <select 
                    className='select-data border-4 border-emerald-400'
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
            <div className='text-center text-black font-bold bg-amber-100 rounded-full p-2 hover:bg-red-300 '>
            <input type='submit' value='Creact New Product' />
            </div>

          </form>

      </>

        
    )
}

export default ContactForm