import React from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

function AuthenticationContainer({ login }) {
  return (
    <div className="fixed flex justify-between bottom-0 h-20 shadow-behind
        shadow-white/20 bg-[#00ADB5] w-full gap-5"
    >
      <div className="flex-1" />
      <div className="w-[615px] max-w-[615px] flex items-center justify-between">
        <div>
          <p className="text-[1.5em] font-bold">Kumpulan Thread Keren</p>
          <p className="text-sm">Cuman disini</p>
        </div>
        <div className="flex gap-3">
          <LoginModal login={login} />
          <SignupModal />
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
}

export default AuthenticationContainer;
