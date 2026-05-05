           import { useState } from 'react';
            import axios from 'axios';
            import { useNavigate, Link } from 'react-router-dom';
                  
            function Login() {
              const navigate = useNavigate();
            
              const [formData, setFormData] = useState({
                email: '',
                password: '',
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
                  const res = await axios.post(
                    'http://localhost:5000/api/auth/login',
                    formData
                  );
            
                  localStorage.setItem('token', res.data.token);
                  navigate('/dashboard');
                } catch (error) {
                  console.log(error);
                  alert('Invalid Credentials');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-50'>
      <form
        onSubmit={handleSubmit}
        className='bg-white w-[400px] p-10 rounded-3xl shadow-xl'
      >
        <h1 className='text-4xl font-bold text-center text-blue-600 mb-8'>
          Login
        </h1>

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

        <button className='bg-blue-600 w-full p-3 rounded-xl text-white'>
          Login
        </button>

        <p className='mt-5 text-center'>
          No account?
          <Link className='text-blue-600 ml-2' to='/register'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;