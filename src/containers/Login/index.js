import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/users';
import Header from './Header';
import ThemeSwitcher from '../../components/ThemeSwitcher';

const Login = () => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setError('');
    login(user)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        setError('Failed to log in');
      });
  }

  return (
    <div className="min-h-full h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Header 
        heading="Login to your account"
        paragraph="Don't have an account yet?"
        linkName="Register"
        linkUrl="/register"  
      />
      <div className="w-full max-w-md mx-auto">
        <form className="bg-white dark:bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={user} placeholder="username" onChange={(e) => setUser(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:border-red-500" placeholder="password" />
          </div>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10" onClick={handleSubmit}>Login</button>
            <p className="text-red-500 text-xs italic">{error}</p>
        </form>
      </div>
      <ThemeSwitcher />  
    </div>
  )
}

export default Login;