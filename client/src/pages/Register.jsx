import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'member',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:5000/api/auth/register',
        formData
      );

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-50'>
      <form
        onSubmit={handleSubmit}
        className='bg-white w-[400px] p-10 rounded-3xl shadow-xl'
      >
        <h1 className='text-4xl font-bold text-center text-blue-600 mb-8'>
          Register
        </h1>

        <input
          type='text'
          name='name'
          placeholder='Enter Name'
          className='w-full p-3 border rounded-xl mb-5'
          onChange={handleChange}
        />

        <input
          type='email'
          name='email'
          placeholder='Enter Email'
          className='w-full p-3 border rounded-xl mb-5'
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='Enter Password'
          className='w-full p-3 border rounded-xl mb-5'
          onChange={handleChange}
        />

        <select
          name='role'
          className='w-full p-3 border rounded-xl mb-5'
          onChange={handleChange}
        >
          <option value='member'>Member</option>
          <option value='admin'>Admin</option>
        </select>

        <button className='bg-blue-600 w-full p-3 rounded-xl text-white'>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;