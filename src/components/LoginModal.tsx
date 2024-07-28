import React, { useState } from 'react';
import Modal from './Modal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface LoginModalProps {
  onClose: () => void;
  onRegisterClick: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Modal onClose={onClose} modalStyle={{ width: '463px', height: '420px' }}>
      <div className="text-center text-[#6B6C70] text-[14px]">WELCOME BACK</div>
      <div className="text-center text-[#FFFFFF] text-[18px] mt-2">Log into your account</div>
      <div className="mt-4">
        <div className="text-[#C5C7CA] text-[14px]">Email or Username</div>
        <input
          type="text"
          placeholder="Enter your email or username"
          className="w-full h-[43px] bg-[#27292D] text-[#7F8084] border border-gray-700 text-[16px] p-2 rounded mt-2"
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="text-[#C5C7CA] text-[14px]">Password</div>
          <div className="text-[#C5C7CA] text-[14px] cursor-pointer">Forgot Password?</div>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className="w-full h-[43px] bg-[#27292D] text-[#7F8084] border border-gray-700 text-[16px] p-2 rounded mt-2 pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash style={{ color: "#C5C7CA", height: '20px', width: '20px' }} /> : <FaEye style={{ color: "#C5C7CA", height: '20px', width: '20px' }} />}
          </div>
        </div>
      </div>
      <button className="mt-4 h-[43px] w-full bg-[#4A96FF] text-white text-[16px] rounded">Login Now</button>
      <div className="mt-4 text-left text-[#C5C7CA] text-[14px] cursor-pointer" onClick={onRegisterClick}>
        Not registered yet? Register →
      </div>
    </Modal>
  );
};

export default LoginModal;