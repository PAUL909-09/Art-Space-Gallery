import { LoginPicture } from "../../config/config";

const LogIn = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-Montserrat">
      {/* Left Section - Full-Screen Image */}
      <div className="relative">
        <img
          src={LoginPicture[0].src}
          alt={LoginPicture[0].alt}
          className="w-full h-screen object-cover"
        />
        {/* Overlay Title */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center px-4">
            Welcome to <br />
            <span className="text-[#C62A35]">LOPENZE</span> Art Gallery
          </h1>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="bg-white flex flex-col items-center justify-center p-8 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-[#C62A35]">
          LOGIN
        </h1>
        <form className="mt-8 w-full max-w-sm">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-bold mb-2 text-[#C62A35] uppercase"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C62A35]"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2 text-[#C62A35] uppercase"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C62A35]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#C62A35] text-white font-bold rounded-lg hover:bg-black transition duration-200"
          >
            Log-In
          </button>
        </form>
      </div>
    </section>
  );
};
 
export default LogIn;

