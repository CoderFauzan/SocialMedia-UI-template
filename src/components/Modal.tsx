import React from 'react';
import CloseButton from './CloseButton';
import './animations.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  modalStyle?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, modalStyle }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
    <div
      className="relative bg-[#27292D] p-6 border-2 border-gradient-to-r from-[#969696] to-[#343434] rounded-lg modal"
      style={modalStyle}
    >
      <CloseButton onClick={onClose} />
      {children}
    </div>
  </div>
);

export default Modal;
