import React, { useState } from "react";
import logo from "../assets/226411.png";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function closeSidebar() {
    setIsOpen(!isOpen);
  }

  function handledropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    // sidebar navigation menu
    <div className="w-full mx-auto h-96 flex">
      <div
        className={`side-bar w-1/5 h-screen font-header bg-gradient-to-b to-slate-800 from-blue-950 text-slate-100 space-y-2 ${
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
          className={`item w-11/12 mx-auto bg-blue-900 p-3 rounded-lg flex cursor-pointer ${
            !isOpen && "bg-slate-50 rounded-full text-amber-500 w-fit"
          }`}
        >
          <span
            className={`material-symbols-rounded mr-2 text-amber-500 ${
              !isOpen && "w-6 h-6 mr-0"
            }`}
          >
            dashboard
          </span>
          <p className={`${!isOpen && "hidden"}`}>Dashboard</p>
        </div>
        <div
          className={`item w-11/12 mx-auto text-slate-300 p-3 rounded-lg flex cursor-pointer hover:text-amber-500 ${
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
          <div className="block mt-2 pl-16 bg-blue-900">
            <a href="#" className=" py-2 text-gray-300 hover:text-white flex">
              <p className="text-amber-500 pr-2">•</p>Option 1
            </a>
            <a href="#" className=" py-2 text-gray-300 hover:text-white flex">
              <p className="text-amber-500 pr-2">•</p>Option 2
            </a>
            <a href="#" className=" py-2 text-gray-300 hover:text-white flex">
              <p className="text-amber-500 pr-2">•</p>Option 3
            </a>
          </div>
        )}
        <div
          className={`item w-11/12 mx-auto text-slate-300 p-3 rounded-lg flex cursor-pointer hover:text-amber-500 transition delay-75 ease-in-out ${
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

      {/* main page layout */}
      <div
        className={`pages w-4/5 m-5 font-header ${
          !isOpen && "w-full"
        } transition-all ease-in-out duration-300`}
      >
        <div className={`sticky top-0 font-header ${!isOpen && "w-full"} mb-5`}>
          Lorem, ipsum dolor
        </div>

        {/* statistics value components  */}
        <div className="w-full flex justify-between space-x-4">
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg bg-amber-50 space-y-1">
            <div className="flex align-middle text-sm text-slate-400">
              <span class="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex align-middle text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>

          {/* item 2 */}
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg bg-indigo-50 space-y-1">
            <div className="flex align-middle text-sm text-slate-400">
              <span class="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex align-middle text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>

          {/* item 3 */}
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg bg-lime-50 space-y-1">
            <div className="flex align-middle text-sm text-slate-400">
              <span class="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex align-middle text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>

          {/* item 4 */}
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg bg-rose-50 space-y-1">
            <div className="flex align-middle text-sm text-slate-400">
              <span class="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex align-middle text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>
        </div>

        {/* graph illustration  */}
        <div></div>
      </div>
      {/* main page layout end  */}
    </div>
  );
};

export default Dashboard;
