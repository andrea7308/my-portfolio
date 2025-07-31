import React, { useState } from 'react'

import './index.scss';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
        ...prev,
        [name]: value
    }));
};

const handleSubmit = e => {
    e.preventDefault();
    alert('Messaage submitted!');
    setForm({ name: '', email: '', message: '' });
};

return (
    <div className='contact-page'>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Message:
                <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
            />
            </label>
            <button type="submit">Send</button>
        </form>
    </div>
    );
};

export default Contact;