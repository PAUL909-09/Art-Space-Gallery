const AddExhibit = () => {
  return (
    <section className="min-h-screen bg-black font-Montserrat">
      {/* <header className="bg-black text-red-500 text-xl font-bold p-4 border-b border-gray-700">
        ADD ARTIST
      </header> */}
      <div className="flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl text-white font-extrabold mb-4">ADD EXHIBITION</h1>
        <p className="text-gray-400 text-center text-sm mb-8 max-w-xl">
          The exhibition featured a stunning <span className="text-red-500">collection</span> of contemporary art, showcasing the <span className="text-red-500">creative talents</span> of both emerging and established <span className="text-red-500">artists</span>.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-gray-700 w-48 h-48 flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <form>
            <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="name">
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter the name"
              className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />

            <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter the email"
              className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />

            <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="contact">
              CONTACT NO.
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Enter contact number"
              className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />

            <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="social">
              SOCIAL MEDIA
            </label>
            <input
              type="text"
              id="social"
              placeholder="Enter social media"
              className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />

            <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="description">
              DESCRIPTION
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              className="w-full p-3 h-32 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
            ></textarea>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-bold transition-colors"
              >
                ADD
              </button>
              <button
                type="button"
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-bold transition-colors"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default AddExhibit;
