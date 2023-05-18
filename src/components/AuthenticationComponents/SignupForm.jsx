import React from 'react';
import {
  Label, TextInput
} from 'flowbite-react';
import { GiFire } from 'react-icons/gi';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function SignupForm({ signup }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
      <div className="justify-center flex">
        <GiFire className="text-[#00adb5] w-8 h-8 mt-0" />
      </div>
      <h3 className="text-xl font-medium text-white dark:text-white">
        Sign up to Blaast
      </h3>
      <div>
        <div className="mb-2 block">
          <Label
            className="text-white"
            htmlFor="name"
            value="Your name"
          />
        </div>
        <TextInput
          type="text"
          id="name_signup"
          placeholder="John Doe"
          value={name}
          onChange={onNameChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            className="text-white"
            htmlFor="email"
            value="Your email"
          />
        </div>
        <TextInput
          type="email"
          id="email_signup"
          placeholder="name@domain.com"
          value={email}
          onChange={onEmailChange}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            className="text-white"
            htmlFor="password"
            value="Your password"
          />
        </div>
        <TextInput
          id="password_signup"
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => signup({ name, email, password })}
          type="button"
          className="w-fit bg-[#00adb5] text-white hover:bg-[#00adb5]/80 transition duration-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log in
        </button>
      </div>
    </div>
  );
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired
};

export default SignupForm;
