import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 w-[32px] h-[32px] rounded-full bg-[#131319] flex items-center justify-center text-white text-xl"
  >
    &times;
  </button>
);

export default CloseButton;
