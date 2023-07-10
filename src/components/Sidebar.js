import React from "react";
import logo from "../assets/226411.png";

const Sidebar = ({ isOpen, closeSidebar, handledropdown, isDropdownOpen }) => {
  return (
    <div
      className={`side-bar h-screen font-header bg-slate-100 text-slate-950 space-y-1 ${
        !isOpen ? "w-32 px-6" : "w-64"
      } transition-all ease-in duration-300 fixed left-0`}
    >
      {/* sidebar logo container */}
      <div
        className={`header w-11/12 mx-auto flex justify-start align-middle text-xl font-semibold mt-6 mb-6 cursor-pointer ${
          !isOpen && "justify-center w-fit"
        }`}
        onClick={closeSidebar}
      >
        <img
          src={logo}
          className={`w-6 h-6 mr-2 ${!isOpen && "mr-0"}`}
          alt="logo"
        ></img>
        <p className={`${!isOpen && "hidden"}`}>Jiraiya's Dashy</p>
      </div>
      {/* sidebar logo end */}

      <div
        className={`w-11/12 mx-auto text-sm text-slate-400 font-semibold pb-2 ${
          !isOpen && "flex justify-center"
        }`}
      >
        MENU
      </div>
      {/* sidebar menu items */}
      <div
        className={`item  bg-blue-100 p-2 border-l-4 border-blue-900 flex cursor-pointer ${
          !isOpen && " rounded-none bg-inherit items-center justify-center"
        }`}
      >
        <span
          className={`material-symbols-rounded mr-2 text-amber-600 ext-md ${
            !isOpen ? "mr-0" : "ml-2"
          }`}
        >
          dashboard
        </span>
        <p
          className={` text-blue-900 font-semibold text-md ${
            !isOpen && "hidden"
          }`}
        >
          Dashboard
        </p>
      </div>
      <div
        className={`item w-11/12 mx-auto text-slate-500 font-semibold p-2 rounded-lg flex cursor-pointer hover:text-amber-600 ${
          !isOpen && "rounded-full w-fit"
        }`}
      >
        <span
          className={`material-symbols-rounded mr-2 text-md ${
            !isOpen && "mr-0"
          }`}
        >
          domain
        </span>
        <div
          className={`w-full flex justify-between align-middle  ${
            !isOpen && "hidden"
          }`}
          onClick={handledropdown}
        >
          <p>Departments</p>
          <span
            className={`material-symbols-rounded ${
              isDropdownOpen && "rotate-180"
            }`}
          >
            expand_more
          </span>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="block mt-2 pl-14 bg-slate-100">
          <a
            href="_blank"
            className=" py-2 text-slate-900 hover:text-slate-950 flex"
          >
            Option 1
          </a>
          <a
            href="_blank"
            className=" py-2 text-slate-900 hover:text-slate-950 flex"
          >
            Option 2
          </a>
          <a
            href="_blank"
            className=" py-2 text-slate-900 hover:text-slate-950 flex"
          >
            Option 3
          </a>
        </div>
      )}
      <div
        className={`item w-11/12 mx-auto text-slate-500 font-semibold p-2 rounded-lg flex cursor-pointer hover:text-amber-600 transition delay-75 ease-in-out ${
          !isOpen && "rounded-full w-fit"
        }`}
      >
        <span
          className={`material-symbols-rounded mr-2 text-md ${
            !isOpen && "mr-0"
          }`}
        >
          medication
        </span>
        <p className={`${!isOpen && "hidden"}`}>Doctors</p>
      </div>

      <div
        className={`w-11/12 mx-auto text-sm text-slate-400 font-semibold pb-2 ${
          !isOpen && "flex justify-center"
        }`}
      >
        PAYMENTS
      </div>
      <div
        className={`item w-11/12 mx-auto text-slate-500 font-semibold p-2 rounded-lg flex cursor-pointer hover:text-amber-600 transition delay-75 ease-in-out ${
          !isOpen && "rounded-full w-fit"
        }`}
      >
        <span
          className={`material-symbols-rounded mr-2 text-md ${
            !isOpen && "mr-0"
          }`}
        >
          paid
        </span>
        <p className={`${!isOpen && "hidden"}`}>Taxes</p>
      </div>
      {/* sidebar items end */}
    </div>
  );
};

export default Sidebar;
