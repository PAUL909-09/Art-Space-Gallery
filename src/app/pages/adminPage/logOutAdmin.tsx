import Button from "../../components/Buttons/button";

const logOutAdmin = () => {
  return (
    <div className="relative min-h-screen bg-[#F5F5F5] flex flex-col ">
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
          children="Log out"
          className="w-100 max-w-xs flex items-center justify-center px-4 py-2 rounded-lg bg-[#000000] text-white font-bold hover:bg-[#C53030]"
        />
      </div>
    </div>
  );
};

export default logOutAdmin;
