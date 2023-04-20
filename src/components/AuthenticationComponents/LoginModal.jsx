import React, { useState } from 'react';
// import { GiFire } from 'react-icons/gi';
import {
  Modal,
} from 'flowbite-react';
import LoginForm from './LoginForm';

function LoginModal({ login }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="p-1 pr-3 pl-3 rounded-full
              border border-[#EEEEEE] hover:bg-white/10 transition duration-100"
        type="button"
      >
        Log in
      </button>
      <Modal
        dismissible
        className="bg-white/10"
        show={visible}
        size="md"
        popup
        onClose={() => setVisible(false)}
      >
        <Modal.Header className="bg-[#222831] rounded-t-md" />
        <Modal.Body className="bg-[#222831] rounded-b-md">
          <LoginForm login={login} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
