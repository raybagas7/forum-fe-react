import React from 'react';
import PropTypes from 'prop-types';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

function AuthenticationContainer({ login, signup }) {
  return (
    <div
      className="fixed bottom-0 z-10 flex h-20 w-full
        justify-between gap-5 bg-[#00ADB5] shadow-behind shadow-white/20"
    >
      <div className="flex-1" />
      <div className="flex w-[615px] max-w-[615px] items-center justify-between">
        <div>
          <p className="text-[1.5em] font-bold max-lg:text-[1em]">Kumpulan Thread Keren</p>
          <p className="text-sm">Cuman disini</p>
        </div>
        <div className="flex gap-3">
          <LoginModal login={login} />
          <SignupModal signup={signup} />
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
}

AuthenticationContainer.propTypes = {
  login: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default AuthenticationContainer;
