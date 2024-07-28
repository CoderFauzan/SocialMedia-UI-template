import React, { useState } from "react";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { BsEmojiAngryFill } from "react-icons/bs";

const Home: React.FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handlePostClick = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModals = () => {
    setShowRegisterModal(false);
    setShowLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  return (
    <div className="bg-[#131319] min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-[700px] text-left">
        <div className="text-[#C5C7CA] text-[28px]">Hello test,</div>
        <div className="text-[#7F8084] text-[16px] w-[580px]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>
        <div className="mt-4 space-y-4">
          <div className="bg-[#35373B] w-[700px] h-[223px] p-4">
            <div className="text-[#C5C7CA] text-[18px]">Create post</div>
            <div className="flex mt-4">
              <div className="w-[48px] h-[48px] flex items-center justify-center">
                <button
                  className="w-[48px] h-[48px] rounded-full bg-[#7F8084] text-white text-[24px] flex items-center justify-center"
                  onClick={handlePostClick}
                >
                  +
                </button>
              </div>
              <textarea
                className="w-full h-[78px] bg-[#191920] text-[#7F8084] text-[16px] p-2 rounded ml-4"
                placeholder="How are you feeling today?"
              />
            </div>
            <button
              className="mt-4 h-[43px] w-[111px] bg-[#4A96FF] text-white text-[16px] rounded float-right"
              onClick={handlePostClick}
            >
              Post
            </button>
          </div>
          <div className="bg-[#35373B] h-[223px] w-[700px] p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-500 mr-4">
                  <img
                    className="object-cover w-[40px] h-[40px] rounded-full"
                    src="https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-[#c5c7ca] text-[16px]">User 1</div>
                  <div className="text-[#7f8084] text-[14px]">5 mins ago</div>
                </div>
              </div>
              <div className="text-[#c5c7ca] text-[16px]">...</div>
            </div>
            <div className="bg-[#191920] text-[#7F8084] text-[16px] p-4 rounded mt-4">
              <div className="flex items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#27292D] mr-4">
                  <MdOutlineThumbUpOffAlt className="object-cover h-[90%] w-[60%] ml-1.5" style={{color:"yellow"}} />
                </div>
                <div className="w-[551px] h-[75px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-[20px] h-[20px]">
                <FaRegCommentAlt style={{ color: "grey" }} />
              </div>
              <div className="text-[#7f8084] text-[14px]">10 comments</div>
            </div>
          </div>
          <div className="bg-[#35373B] h-[223px] w-[700px] p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-500 mr-4">
                  <img
                    className="object-cover w-[40px] h-[40px] rounded-full"
                    src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-[#c5c7ca] text-[16px]">User 1</div>
                  <div className="text-[#7f8084] text-[14px]">5 mins ago</div>
                </div>
              </div>
              <div className="text-[#c5c7ca] text-[16px]">...</div>
            </div>
            <div className="bg-[#191920] text-[#7F8084] text-[16px] p-4 rounded mt-4">
              <div className="flex items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#27292D] mr-4">
                  <BsEmojiAngryFill className="object-cover h-[90%] w-[60%] ml-2" style={{color:"red"}} />
                </div>
                <div className="w-[551px] h-[75px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-[20px] h-[20px]">
                <FaRegCommentAlt style={{ color: "grey" }} />
              </div>
              <div className="text-[#7f8084] text-[14px]">10 comments</div>
            </div>
          </div>
        </div>
      </div>
      {showRegisterModal && (
        <RegisterModal
          onClose={handleCloseModals}
          onLoginClick={handleOpenLoginModal}
        />
      )}
      {showLoginModal && (
        <LoginModal
          onClose={handleCloseModals}
          onRegisterClick={handleOpenRegisterModal}
        />
      )}
    </div>
  );
};

export default Home;
