import React, { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
  name: '',
  email: '',
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const [errors, setErrors] = useState({});
  const { name, email } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name.trim()) {
      setErrors({
        ...errors,
        name: 'Name is required',
      });
      return;
    }
    if (!email.trim()) {
      setErrors({
        ...errors,
        email: 'Email is required',
      });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({
        ...errors,
        email: 'Email is invalid',
      });
      return;
    }
    // If form is valid, submit the contact
    getContact(values);
    setValues({ ...CONTACT_FORM_INIT_STATE });
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name && 'border-red-500'
            }`}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email && 'border-red-500'
            }`}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create A New Contact
          </button>
        </div>
      </form>
    </div>
  );
};

// Example usage of the ContactForm component
const App = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="container mx-auto px-4">
      <ContactForm getContact={getContact} />
      <hr className="my-4" />
      <Table contacts={contacts} />
    </div>
  );
};

const Table = ({ contacts }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Contacts</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{contact.name}</td>
              <td className="border px-4 py-2">{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
