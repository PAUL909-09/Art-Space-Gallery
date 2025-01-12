const CreateAccountAdmin = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center font-Montserrat">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-2">Create Account</h1>
        <p className="text-center text-gray-400 text-sm mb-6">
          Create an <span className="text-red-500">Artist (Member)</span> and <span className="text-red-500">Admin</span> account for Lopensa Website
        </p>
        <form>
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
          />

          <label className="block text-sm font-semibold mb-2" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
          />

          <label className="block text-sm font-semibold mb-2" htmlFor="role">
            ROLE
          </label>
          <select
            id="role"
            className="w-full p-3 mb-6 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
          >
            <option value="artist">Artist (Member)</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-md font-bold transition-colors"
          >
            CREATE
          </button>

          <button
            type="button"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-md font-bold mt-4 transition-colors"
          >
            CANCEL
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateAccountAdmin;
