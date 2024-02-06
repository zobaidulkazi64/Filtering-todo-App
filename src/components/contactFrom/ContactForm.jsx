import React, { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
  name: '',
  email: '',
  address: '',
  group: ''
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const [errors, setErrors] = useState({});
  const { name, email, address, group } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name.trim()) {
      setErrors({
        ...errors,
        name: 'Product name is required'
      });
      return;
    }
    if (!email.trim()) {
      setErrors({
        ...errors,
        email: 'Special Price is required'
      });
      return;
    }
    if (!address.trim()) {
      setErrors({
        ...errors,
        address: 'Regular Price is required'
      });
      return;
    }
    if (group === 'Select Categories') {
      setErrors({
        ...errors,
        group: 'Please select a category'
      });
      return;
    }
    // If form is valid, submit the contact
    getContact(values);
    setValues({ ...CONTACT_FORM_INIT_STATE });
  };

  return (
    <>
      <h1 className='text-4xl text-center'>Create Your Product List</h1>
      <form className='fromc border-4' onSubmit={handleSubmit} >
        <div className='input_from border-spacing-3'>
          <div>
            <input className={`border-4 border-emerald-400 ${errors.name && 'border-red-500'}`} type='text' placeholder='Product name' onChange={handleChange} name='name' value={name} />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>
          <br />
          <div>
            <input className={`border-4 border-emerald-400 ${errors.email && 'border-red-500'}`} type='text' placeholder='Special Price' name='email' onChange={handleChange} value={email} />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <br />
          <div>
            <input className={`border-4 border-emerald-400 ${errors.address && 'border-red-500'}`} type='text' placeholder='Regular Price' name='address' onChange={handleChange} value={address} />
            {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
          </div>
          <br />
          <div className='label-data'>
            <label>Filtering Data:</label>
            <br />
            <select
              className={`select-data border-4 border-emerald-400 ${errors.group && 'border-red-500'}`}
              name='group'
              onChange={handleChange}
              value={group}
            >
              <option>Select Categories</option>
              <option>Bath & Body</option>
              <option>Health & Beauty</option>
              <option>Home & Lifestyle</option>
              <option>Electronic Devices</option>
            </select>
            {errors.group && <p className="text-red-500 text-xs italic">{errors.group}</p>}
          </div>
        </div>
        <br />
        <div className='text-center text-black font-bold bg-amber-100 rounded-full p-2 hover:bg-red-300 '>
          <input type='submit' value='Create New Product' />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
