import React, { useState } from "react";
import logo from "../assets/226411.png";
// import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //   const data = {
  //     labels: ["January", "February", "March", "April", "May", "June"],
  //     datasets: [
  //       {
  //         label: "Data",
  //         data: [12, 19, 3, 5, 2, 3],
  //         fill: false,
  //         borderColor: "rgba(75,192,192,1)",
  //       },
  //     ],
  //   };

  //   const options = {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   };

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
        className={`side-bar w-1/5 h-screen font-header bg-slate-100 text-slate-950 space-y-1 ${
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
          <img
            src={logo}
            className={`w-6 h-6 mr-2 ${!isOpen && "mr-0"}`}
            alt="logo"
          ></img>
          <p className={`${!isOpen && "hidden"}`}>Jiraiya's Dashy</p>
        </div>
        {/* sidebar logo end */}

        {/* sidebar menu items */}
        <div
          className={`item w-11/12 mx-auto bg-blue-100 p-2 rounded-md flex cursor-pointer ${
            !isOpen && "bg-blue-900 rounded-full text-amber-600"
          }`}
        >
          <span
            className={`material-symbols-rounded mr-2 text-amber-600 ${
              !isOpen && "w-6 h-6 mr-0"
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
          className={`item w-11/12 mx-auto text-slate-950 p-2 rounded-lg flex cursor-pointer hover:text-amber-600 ${
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
          <div className="block mt-2 pl-16 bg-slate-100 border-t-2 border-b-2 border-slate-200">
            <a
              href="_blank"
              className=" py-2 text-slate-900 hover:text-slate-950 flex"
            >
              <p className="text-amber-500 pr-2">•</p>Option 1
            </a>
            <a
              href="_blank"
              className=" py-2 text-slate-900 hover:text-slate-950 flex"
            >
              <p className="text-amber-500 pr-2">•</p>Option 2
            </a>
            <a
              href="_blank"
              className=" py-2 text-slate-900 hover:text-slate-950 flex"
            >
              <p className="text-amber-500 pr-2">•</p>Option 3
            </a>
          </div>
        )}
        <div
          className={`item w-11/12 mx-auto text-slate-950 p-2 rounded-lg flex cursor-pointer hover:text-amber-600 transition delay-75 ease-in-out ${
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
        <div
          className={`sticky top-0 font-header text-3xl text-blue-900 font-semibold ${
            !isOpen && "w-full"
          } mb-5`}
        >
          Dashboard
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
      </div>
      {/* main page layout end  */}
    </div>
  );
};

export default Dashboard;
