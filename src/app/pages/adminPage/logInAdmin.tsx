import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoginPicture } from "../../config/config";

// Define interfaces for type safety
interface User {
  username: string;
  password: string;
  redirectPath: string;
}

// Mock user data
const mockUsers: { [key: string]: User } = {
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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Removed console.log to avoid no-console ESLint warning
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Simulate login processing
    setTimeout(() => {
      const user = Object.values(mockUsers).find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setIsLoading(false);
        navigate(user.redirectPath);
      } else {
        setIsLoading(false);
        setErrorMessage("Invalid username or password");
      }
    }, 1500); // Simulate API delay
  };

  // Helper function to safely get LoginPicture src and alt
  const getLoginPicture = () => {
    // Handle different possible shapes of LoginPicture from config.ts
    if (LoginPicture && typeof LoginPicture === "object") {
      if (Array.isArray(LoginPicture)) {
        return LoginPicture[0] || { src: "/default-login.jpg", alt: "Login" };
      }
      return LoginPicture;
    }
    return { src: "/default-login.jpg", alt: "Login" };
  };

  const loginImage = getLoginPicture();

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
          src={loginImage.src}
          alt={loginImage.alt}
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
        {errorMessage && (
          <div className="bg-red-200 text-red-700 p-4 rounded mb-4 w-full max-w-sm">
            Error: {errorMessage}
          </div>
        )}
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 w-full max-w-sm"
          aria-label="Login form"
        >
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-bold mb-2 text-[#C62A35] uppercase"
            >
              Username
            </label>
            <motion.input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C62A35]"
              placeholder="Enter your username"
              required
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C62A35]"
              placeholder="Enter your password"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#C62A35] text-white font-bold rounded-lg hover:bg-black transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default LogIn;
