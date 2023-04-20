import React, { useState } from 'react';
import { GiFire } from 'react-icons/gi';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { MdLeaderboard, MdOutlineLeaderboard } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import UserProfile from './UserProfile';
import AuthenticationContainer from './AuthenticationComponents/AuthenticationContainer';
import { asyncSetAuthUser, asyncUnsetAuthUser } from '../states/authUser/action';

function Navigation({ authUser }) {
  const [activeNav, setActiveNav] = useState('home');
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <>
      <div className="flex flex-1 flex-row-reverse">
        <div className="fixed h-screen">
          <div className="flex h-full flex-col justify-between">
            <div className="mt-5">
              <div className="group/logo mb-5 h-fit w-fit cursor-pointer rounded-full p-2 transition duration-100 hover:bg-white/10">
                <GiFire className="h-8 w-8 transition duration-100 group-hover/logo:text-[#00ADB5]" />
              </div>
              <nav>
                <ul className="flex flex-col gap-3 text-xl">
                  <li
                    onClick={() => setActiveNav('home')}
                    className="flex w-fit cursor-pointer items-center gap-5 rounded-full p-2 transition duration-100 hover:bg-white/10"
                  >
                    {activeNav === 'home' ? <AiFillHome className="h-8 w-8" /> : <AiOutlineHome className="h-8 w-8" />}
                    <span className="mr-5">Home</span>
                  </li>
                  <li
                    onClick={() => setActiveNav('leaderboards')}
                    className="flex w-fit cursor-pointer items-center gap-5 rounded-full p-2 transition duration-100 hover:bg-white/10"
                  >
                    {activeNav === 'leaderboards' ? <MdLeaderboard className="h-8 w-8" /> : <MdOutlineLeaderboard className="h-8 w-8" />}
                    <span className="mr-5">Leaderboards</span>
                  </li>
                </ul>
              </nav>
            </div>
            {authUser
              ? <UserProfile logout={onLogout} authUser={authUser} />
              : null}

          </div>
        </div>

      </div>
      {authUser ? null : (
        <AuthenticationContainer login={onLogin} />
      )}
    </>
  );
}

export default Navigation;
