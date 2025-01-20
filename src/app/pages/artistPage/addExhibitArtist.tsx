import { Icons } from "../../config/config";
import { useState } from "react";

const AddExhibit = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <section className="min-h-screen bg-black font-Montserrat">
      {/* <header className="bg-black text-red-500 text-xl font-bold p-4 border-b border-gray-700">
        ADD ARTIST
      </header> */}
      <div className="flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl text-white font-extrabold mb-4">
          ADD EXHIBITION
        </h1>
        <p className="text-gray-400 text-center text-sm mb-8 max-w-xl">
          The exhibition featured a stunning{" "}
          <span className="text-red-500">collection</span> of contemporary art,
          showcasing the <span className="text-red-500">creative talents</span>{" "}
          of both emerging and established{" "}
          <span className="text-red-500">artists</span>.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl">
          <div className="flex flex-col items-center mb-6">
            <div
              className="bg-gray-700 w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-600 transition-colors"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected artwork"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-white p-4">
                    <img
                      src={Icons[0]?.src || "default-icon.png"}
                      alt={Icons[0]?.alt || "default-icon"}
                      className="h-8 w-8"
                    />
                  </div>
                  <p className="text-gray-300 text-sm">Click to upload image</p>
                </div>
              )}
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
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

            <label
              className="block text-sm text-gray-400 font-semibold mb-2"
              htmlFor="description"
            >
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
