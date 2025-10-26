import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../config/config";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
const CreateAccountAdmin = () => {
  const navigate = useNavigate(); // Correct hook for navigation
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal instead of directly saving
  };
  const handleModalConfirm = () => {
    // Perform the actual save operation here (e.g., API call)
    setLoading(true);
    // Simulate a save (replace with your actual save logic)
    setTimeout(() => {
      setLoading(false);
      alert("Account Added Successfully!");
      navigate(-1); // Go back to the previous page after saving
      setIsModalOpen(false); // Close the modal
    }, 2000);
  };

  return (
    <div>
      <section
        className="min-h-screen bg-black font-Montserrat"
        style={{ backgroundColor: "#201D1E" }}
      >
        <div className="flex flex-col items-center py-12 px-6">
          <h1 className="text-5xl text-white font-extrabold mb-4 mt-7">
            CREATE ACCOUNT
          </h1>
          <p className="text-gray-400 text-center text-sm mb-2 max-w-xl">
            Create an <span className="text-red-500">Artist(Member)</span> and{" "}
            <span className="text-red-500">Admin</span> account for{" "}
            <span className="text-red-500">Lopenze</span> website.
          </p>

          {/* Icon for Add Image */}
          <div className="p-8 rounded-lg shadow-lg w-full max-w-xl">
            <div className="flex flex-col items-center mb-6">
              <input type="file" id="fileInput" className="hidden" />
            </div>
            <form>
              <label
                className="block text-sm text-gray-400 font-semibold mb-2"
                htmlFor="name"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter the name"
                className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
              />

              <label
                className="block text-sm text-gray-400 font-semibold mb-2"
                htmlFor="email"
              >
                PASSWORD
              </label>
              <input
                type="email"
                id="password"
                placeholder="Enter the email"
                className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
              />

              <label
                className="block text-sm text-gray-400 font-semibold mb-2"
                htmlFor="contact"
              >
                ROLE
              </label>

              <select
                id="typeOfArt"
                className="w-full p-3 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
              >
                <option value="" disabled>
                  Select type of role
                </option>
                <option value="Artist">Artist</option>
                <option value="User">User</option>
              </select>

              <div className="flex flex-col items-center mt-8 mx-7">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-600 outline outline-2 outline-white mt-6 hover:bg-green-500 text-white py-2 px-6 rounded-md font-bold transition-colors w-full"
                >
                  {loading ? "Saving..." : "Save"}
                </button>



                <button
                  type="button"
                  className="outline outline-2 outline-white mt-6 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-bold transition-colors w-full"
                >
                  CANCEL
                </button>
              </div>
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Confirm Create Update"
                message="Are you sure you create account?"
                confirmButtonText="Create"
                onConfirm={handleModalConfirm}
              // itemData={formData} // Removed itemData
              />
            </form>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-xl font-bold mb-4">ADD ART</h1>
        <div className="relative w-48 h-64 bg-red-600 flex items-center justify-center rounded shadow-md">
          <div
            className="w-10 h-10 bg-red-800 flex items-center justify-center rounded cursor-pointer"
            onClick={() => {
              const route = APP_ROUTES.ADMIN.find(
                (route) => route.path === "/addArt"
              );
              if (route) navigate(route.path); // Safe navigation
            }}
          >
            <span className="text-white text-2xl">+</span>
          </div>
        </div>
        <hr className="mt-6 w-3/4 border-gray-300" />
      </section>
    </div>
  );
};

export default CreateAccountAdmin;
