import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTES, Icons } from "../../config/config";
import { useState } from "react";

const AddExhibit = () => {
  const navigate = useNavigate(); // Correct hook for navigation
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <section
        className="min-h-screen bg-black font-Montserrat"
        style={{ backgroundColor: "#201D1E" }}
      >
        <div className="flex flex-col items-center py-12 px-6">
          <h1 className="text-5xl text-white font-extrabold mb-4 mt-7">
            ADD EXHIBITION
          </h1>
          <p className="text-gray-400 text-center text-sm mb-8 max-w-xl">
            The exhibition featured a stunning{" "}
            <span className="text-red-500">collection</span> of contemporary
            art, showcasing the{" "}
            <div className="mt-4">
              <span className="text-red-500">creative talents</span> of both
              emerging and established{" "}
              <span className="text-red-500">artists</span>.
            </div>
          </p>

          {/* Icon for Add Image */}
          <div className="p-8 rounded-lg shadow-lg w-full max-w-xl">
            <div className="flex flex-col items-center mb-6">
              <div
                className="bg-white w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer"
                onClick={() => document.getElementById("fileInput")?.click()}
              >
                <div className="rounded-md outline outline-2 outline-offset-8 outline-black">
                  <img
                    src={selectedImage || Icons[0]?.src || "default-icon.png"} // Show selected image or fallback
                    alt={Icons[0]?.alt || "default-icon"}
                    className={
                      selectedImage
                        ? "w-full h-full object-cover rounded-lg"
                        : "h-12 w-12 rounded-md"
                    }
                  />
                </div>
              </div>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setSelectedImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
            <form>
              <label
                className="block text-sm text-gray-400 font-semibold mb-2"
                htmlFor="name"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter the name"
                className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
              />

              <label
                className="block text-sm text-gray-400 font-semibold mb-2"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter the email"
                className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
              />

              <label
                className="block text-sm text-gray-400 font-semibold mb-2"
                htmlFor="contact"
              >
                CONTACT NO.
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter contact number"
                className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
              />

              <label
                className="block text-sm text-gray-400 font-semibold mb-2"
                htmlFor="social"
              >
                SOCIAL MEDIA
              </label>
              <input
                type="text"
                id="social"
                placeholder="Enter social media"
                className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
              />

              <div>
                <label
                  className="block text-sm text-gray-400 font-semibold mb-2"
                  htmlFor="description"
                >
                  DESCRIPTION
                </label>
                <textarea
                  id="description"
                  placeholder="Enter description"
                  className="w-full p-3 h-96 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
                ></textarea>
              </div>

              <div className="flex flex-col items-center mt-8 mx-7">
                <button
                  type="submit"
                  className="bg-[#C62A35] hover:bg-red-700 text-white py-2 px-6 rounded-md font-bold transition-colors w-full"
                >
                  ADD
                </button>

                <button
                  type="button"
                  className="outline outline-2 outline-white mt-6 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-bold transition-colors w-full"
                >
                  CANCEL
                </button>
              </div>
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

export default AddExhibit;
