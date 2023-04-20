import React, { useState } from 'react';
// import { GiFire } from 'react-icons/gi';
import {
  Modal,
} from 'flowbite-react';
import SignupForm from './SignupForm';

function SignupModal() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="p-1 pr-3 pl-3 rounded-full
              bg-[#EEEEEE] text-[#00ADB5] hover:contrast-75 transition duration-100"
        type="button"
      >
        Sign up
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
          <SignupForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignupModal;
