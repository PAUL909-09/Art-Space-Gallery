import { Icons } from "../../config/config";

const AddArt = () => {
  return (
    <section className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#800000] h-[300px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">ADD ART</h1>
        <p className="text-white text-lg leading-relaxed">
          Adding art to any space enhances its{" "}
          <span className="font-semibold">visual appeal</span>, creating an
          atmosphere that stimulates{" "}
          <span className="font-semibold">creativity</span> and sparks{" "}
          <span className="font-semibold">emotional connection</span>.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-3xl mx-auto p-6 -mt-28 ">
        {/* Image Upload Section */}
        <div className="flex justify-center mb-8">
          <div
            className="bg-gray-100 w-64 h-64 flex items-center justify-center rounded-lg shadow cursor-pointer"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <div className="rounded-md outline outline-2 outline-offset-8 outline-black">
              <img
                src={Icons[0]?.src ?? "default-icon.png"} // Fallback if Icons is empty
                alt={Icons[0]?.alt ?? "default-icon"}
                className="h-12 w-12 rounded-md"
              />
            </div>
          </div>
          <input type="file" id="fileInput" className="hidden" />
        </div>

        {/* Form Section */}
        <form className="grid grid-cols-1 gap-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-black mb-2"
            >
              TITLE
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              className="w-full p-3 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
            />
          </div>

          {/* Type of Art Input */}
          <div>
            <label
              htmlFor="typeOfArt"
              className="block text-sm font-semibold border-black mb-2"
            >
              TYPE OF ART
            </label>
            <select
              id="typeOfArt"
              className="w-full p-3 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
            >
              <option value="" disabled>
                Select type of art
              </option>
              <option value="painting">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photography">Photography</option>
            </select>
          </div>

          {/* Artist Input */}
          {/* Artist Input */}
          <div>
            <label
              htmlFor="artist"
              className="block text-sm font-semibold text-black mb-2"
            >
              ARTIST
            </label>
            <input
              type="text"
              id="artist"
              placeholder="Enter artist name"
              className="w-full p-3 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
            />
          </div>

          {/* Dimensions Input */}
          <div>
            <label
              htmlFor="dimensions"
              className="block text-sm font-semibold text-black mb-2"
            >
              DIMENSIONS
            </label>
            <input
              type="text"
              id="dimensions"
              placeholder="Enter dimensions (e.g., 12x16 inches)"
              className="w-full p-3 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-black mb-2"
            >
              DESCRIPTION
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              className="w-full p-3 h-28 text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
            ></textarea>
          </div>
        </form>

        {/* Buttons Section */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          <button
            type="submit"
            className="bg-[#800000] hover:bg-red-700 text-white py-2 px-6 rounded-md font-bold w-full transition-colors"
          >
            ADD
          </button>
          <button
            type="button"
            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-6 rounded-md font-bold w-full transition-colors"
          >
            CANCEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddArt;
