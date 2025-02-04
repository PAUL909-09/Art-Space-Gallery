import { LoginPicture } from "../../config/config";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Mock user data
const mockUsers = {
  artist: {
    username: "artist",
    password: "password",
    redirectPath: "/artist",
  },
  admin: {
    username: "admin",
    password: "password",
    redirectPath: "/admin",
  },
};

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Page loaded with animation");
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = Object.values(mockUsers).find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate(user.redirectPath);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-Montserrat overflow-hidden">
      {/* Left Section - Full-Screen Image with Animation */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative"
      >
        <img
          src={
            Array.isArray(LoginPicture) ? LoginPicture[0].src : LoginPicture.src
          }
          alt={
            Array.isArray(LoginPicture) ? LoginPicture[0].alt : LoginPicture.alt
          }
          className="w-full h-screen object-cover"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white text-center px-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Welcome to <br />
            <span className="text-[#C62A35]">LOPENZE</span> Art Gallery
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Right Section - Login Form with Animation */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-white flex flex-col items-center justify-center p-8 shadow-lg"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-[#C62A35]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          LOGIN
        </motion.h1>
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 w-full max-w-sm"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-bold mb-2 text-[#C62A35] uppercase"
            >
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C62A35]"
              placeholder="Enter your name"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2 text-[#C62A35] uppercase"
            >
              Password
            </label>
            <motion.input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C62A35]"
              placeholder="Enter your password"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#C62A35] text-white font-bold rounded-lg hover:bg-black transition duration-200"
          >
            Log-In
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default LogIn;
