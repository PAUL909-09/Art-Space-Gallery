// src/app/pages/adminPage/logOutAdmin.tsx
import Button from "../../components/Buttons/button";
import LogOutModal from "../../components/Modal/LogOut";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogOutAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Redirect to login page
    setIsModalOpen(false); // Close modal after logout
  };

  return (
    <div className="relative min-h-screen bg-[#F5F5F5] flex flex-col">
      <div className="flex items-right text-right justify-end">
        <h1 className="font-extrabold text-7xl mt-20 mb-8 text-right">
          Thank you for visiting <br />{" "}
          <span className="text-[#C62A35]">the Lopenze</span> Art Gallery!
          <br /> We hope to see you <br />
          again soon.
        </h1>
      </div>
      <div className="flex items-center justify-center mt-10 h-48 bg-[#C62A35]">
        <Button
          onClick={() => setIsModalOpen(true)} // Open modal on button click
          children="Log out"
          className="w-100 max-w-xs flex items-center justify-center px-4 rounded-lg bg-black text-white font-bold hover:bg-[#C53030]"
        />
      </div>
      {/* Render LogOutModal with props */}
      <LogOutModal
        isOpen={isModalOpen} // Pass state to modal
        onClose={() => setIsModalOpen(false)} // Close function
        onConfirm={handleLogout} // Logout function
      />
    </div>
  );
};

export default LogOutAdmin;
