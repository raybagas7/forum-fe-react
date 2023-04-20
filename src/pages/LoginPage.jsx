import React from 'react';
import { GiFire } from 'react-icons/gi';
import useInput from '../hooks/useInput';

function LoginPage({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (

    <div className="relative w-full max-w-md max-h-full">
      <div className="relative bg-[#222831] p-7 rounded-xl shadow dark:bg-gray-700">
        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <div className="justify-center flex">
            <GiFire className="text-[#00adb5] w-8 h-8 mb-5 mt-0" />
          </div>
          <h3 className="text-xl flex justify-center font-medium text-white dark:text-white">
            Log in to Blaast
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-white text-sm font-medium dark:text-white">Your email</label>
              <input
                type="email"
                name="email"
                id="email-login"
                value={email}
                onChange={onEmailChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
              <input
                type="password"
                name="password"
                id="password-login"
                value={password}
                onChange={onPasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-fit bg-[#00adb5] text-white hover:bg-[#00adb5]/80 transition duration-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => login({ email, password })}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
