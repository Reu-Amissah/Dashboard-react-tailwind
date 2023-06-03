import React, { useState } from "react";
import logo from "../assets/226411.png";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    // sidebar navigation menu
    <div className="w-full mx-auto h-96 flex">
      <div
        className={`side-bar w-1/5 h-screen font-header bg-slate-800 text-slate-100 space-y-2 ${
          !isOpen && "w-fit px-6"
        } transition-all ease-in-out duration-300`}
      >
        {/* sidebar logo container */}
        <div
          className={`header w-11/12 mx-auto flex justify-start align-middle text-xl font-semibold mt-6 mb-6 cursor-pointer ${
            !isOpen && "justify-center w-fit"
          }`}
          onClick={closeSidebar}
        >
          <img src={logo} className={`w-6 h-6 mr-2 ${!isOpen && "mr-0"}`}></img>
          <p className={`${!isOpen && "hidden"}`}>Jiraiya's Dashy</p>
        </div>
        {/* sidebar logo end */}

        {/* sidebar menu items */}
        <div
          className={`item w-11/12 mx-auto bg-slate-700 p-3 rounded-lg flex cursor-pointer ${
            !isOpen && "bg-slate-50 rounded-full text-slate-700 w-fit"
          }`}
        >
          <span
            className={`material-symbols-rounded mr-2 ${
              !isOpen && "w-6 h-6 mr-0"
            }`}
          >
            dashboard
          </span>
          <p className={`${!isOpen && "hidden"}`}>Dashboard</p>
        </div>
        <div
          className={`item w-11/12 mx-auto text-slate-300 p-3 rounded-lg flex cursor-pointer hover:bg-slate-700 hover:text-cyan-500 ${
            !isOpen && "rounded-full w-fit"
          }`}
        >
          <span
            className={`material-symbols-rounded mr-2 ${
              !isOpen && "w-6 h-6 mr-0"
            }`}
          >
            domain
          </span>
          <p className={`${!isOpen && "hidden"}`}>Departments</p>
        </div>
        <div
          className={`item w-11/12 mx-auto text-slate-300 p-3 rounded-lg flex cursor-pointer hover:bg-slate-700 hover:text-cyan-500 transition delay-75 ease-in-out ${
            !isOpen && "rounded-full w-fit"
          }`}
        >
          <span
            className={`material-symbols-rounded mr-2 ${
              !isOpen && "w-6 h-6 mr-0"
            }`}
          >
            medication
          </span>
          <p className={`${!isOpen && "hidden"}`}>Doctors</p>
        </div>
        {/* sidebar items end */}
      </div>

      <div className="pages w-4/5">
        <div className="nav-bar sticky top-0 font-header">navbar</div>
      </div>
    </div>
  );
};

export default Dashboard;
