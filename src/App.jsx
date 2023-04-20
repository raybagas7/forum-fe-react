import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import { asyncPreloadProcess } from './states/isPreload/action';
import LoginPage from './pages/LoginPage';
import { asyncSetAuthUser } from './states/authUser/action';
import 'flowbite';

function App() {
  const dispatch = useDispatch();

  const {
    isPreload = false,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage login={onLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
