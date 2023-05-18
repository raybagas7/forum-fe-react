import React from 'react';
import { GiFire } from 'react-icons/gi';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { MdLeaderboard, MdOutlineLeaderboard } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import AuthenticationContainer from './AuthenticationComponents/AuthenticationContainer';
import { asyncSetAuthUser, asyncUnsetAuthUser } from '../states/authUser/action';
import { asyncAutoLoginAfterSignup } from '../states/shared/action';
import { clearCategory } from '../states/chosenCategory/action';

function Navigation({ authUser }) {
  const param = useLocation();
  const activeNav = param.pathname;
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const onSignup = ({ name, email, password }) => {
    dispatch(asyncAutoLoginAfterSignup({ name, email, password }));
  };

  const onHomeClick = () => {
    dispatch(clearCategory());
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
                  <Link
                    onClick={onHomeClick}
                    to="/"
                    className="flex w-fit cursor-pointer items-center gap-5 rounded-full p-2 transition duration-100 hover:bg-white/10"
                  >
                    {activeNav === '/' ? <AiFillHome className="h-8 w-8" /> : <AiOutlineHome className="h-8 w-8" />}
                    <span className="mr-5">Home</span>
                  </Link>
                  <Link
                    to="/leaderboards"
                    className="flex w-fit cursor-pointer items-center gap-5 rounded-full p-2 transition duration-100 hover:bg-white/10"
                  >
                    {activeNav === '/leaderboards' ? <MdLeaderboard className="h-8 w-8" /> : <MdOutlineLeaderboard className="h-8 w-8" />}
                    <span className="mr-5">Leaderboards</span>
                  </Link>
                </ul>
              </nav>
            </div>
            {authUser
              ? <UserProfile logout={onLogout} {...authUser} />
              : null}

          </div>
        </div>

      </div>
      {authUser ? null : (
        <AuthenticationContainer login={onLogin} signup={onSignup} />
      )}
    </>
  );
}

const authUserShape = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,

};
Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape)
};

Navigation.defaultProps = {
  authUser: null,
};

export default Navigation;
