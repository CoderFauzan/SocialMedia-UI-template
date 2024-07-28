import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuShapes } from "react-icons/lu";

interface LoginProps {
  setUsername: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ setUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Mock API call
    if (email === 'test' && password === 'password') {
      setUsername(email);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <LuShapes className="w-[40px] h-[40px] mb-4" />
        <div className="bg-[#27292D] w-[463px] h-[420px] border border-transparent border-t-[#969696] border-b-[#343434] border-l-[#969696] border-r-[#343434] rounded-lg p-6">
          <div className="text-center text-[#6B6C70] text-[14px] mb-2">
            WELCOME BACK
          </div>
          <div className="text-center text-[18px] text-white mb-6">
            Log into your account
          </div>
          <div>
            <label className="block text-[#C5C7CA] text-[14px] mb-1">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[43px] text-[#7F8084] text-[16px] bg-[#131319] border border-[#35373B] rounded px-4 mb-4"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[#C5C7CA] text-[14px]">
                Password
              </label>
              <a href="#" className="text-[#C5C7CA] text-[14px]">
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[43px] text-[#7F8084] text-[16px] bg-[#131319] border border-[#35373B] rounded px-4 pr-10 mb-4"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer mb-3.5 " onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash style={{ color: "#C5C7CA", height: '20px', width: '20px' }} /> : <FaEye style={{ color: "#C5C7CA", height: '20px', width: '20px' }} />}
              </div>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full h-[43px] bg-[#4A96FF] text-white text-[16px] rounded mt-6"
          >
            Login Now
          </button>
          <div className="text-[#C5C7CA] text-[14px] mt-4">
            Not registered yet? <a href="#" className="text-[#C5C7CA] underline">Register →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
