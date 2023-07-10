import React from "react";

const Navbar = (isOpen) => {
  return (
    <div
      className={`sticky top-0 bg-white flex justify-between items-center py-3 font-header${
        !isOpen && "w-full"
      }`}
    >
      <div className=" text-3xl text-blue-900 font-semibold ">Dashboard</div>

      <div className="flex justify items-center text-sm bg-slate-100 p-2 rounded-md">
        <span className="material-symbols-rounded text-md text-slate-400 mr-1">
          pending_actions
        </span>
        <p className="text-slate-400 mr-5">Time Period:</p>{" "}
        <p className="text-blue-900 font-semibold mr-5">
          December 14 - January 14, 2023
        </p>
        <span className={`material-symbols-rounded mr-2 text-blue-900 ext-md`}>
          expand_more
        </span>
      </div>
    </div>
  );
};

export default Navbar;
