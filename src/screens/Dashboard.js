import React, { useState } from "react";
import logo from "../assets/226411.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  // Other chart options
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const Ddata = {
  labels: ["Net Revenue", "Gross Income", "Marketing"],
  datasets: [
    {
      data: [15, 5, 8],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
    },
  ],
};

export const Ldata = {
  labels,
  datasets: [
    {
      data: [35, 2, 10, 6, 2, 3, 70],
      lineTension: 0.4,
      pointRadius: 0,
      // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      label: "Patient",
      data: [12, 19, 3, 5, 2, 3, 24],
      lineTension: 0.4,
      pointRadius: 0,
      // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Appointment",
      lineTension: 0.4,
      pointRadius: 0,
      data: [16, 20, 1, 1, 8, 9, 20],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

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
    <div className="w-full mx-auto flex">
      <div
        className={`side-bar w-1/5 h-screen font-header bg-slate-100 text-slate-950 space-y-1 ${
          !isOpen && "w-fit px-6"
        } transition-all ease-in-out duration-300 overflow-y-hidden`}
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
            !isOpen &&
            "border-l-2 border-blue-900 rounded-none bg-inherit items-center justify-center"
          }`}
        >
          <span
            className={`material-symbols-rounded mr-2 text-amber-600 ext-md ${
              !isOpen && "mr-0"
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

      {/* main page layout */}
      <div
        className={`pages w-4/5 m-5 font-header ${
          !isOpen && "w-full"
        } transition-all ease-in-out duration-300`}
      >
        <div
          className={`sticky top-0 flex justify-between items-center font-header${
            !isOpen && "w-full"
          } mb-5`}
        >
          <div className=" text-3xl text-blue-900 font-semibold ">
            Dashboard
          </div>

          <div className="flex justify items-center text-sm bg-slate-100 p-2 rounded-md">
            <span className="material-symbols-rounded text-md text-slate-400 mr-1">
              pending_actions
            </span>
            <p className="text-slate-400 mr-5">Time Period:</p>{" "}
            <p className="text-blue-900 font-semibold mr-5">
              December 14 - January 14, 2023
            </p>
            <span
              className={`material-symbols-rounded mr-2 text-blue-900 ext-md`}
            >
              expand_more
            </span>
          </div>
        </div>

        {/* statistics value components  */}
        <div className="w-full flex justify-between space-x-4">
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg space-y-1">
            <div className="flex items-center  text-sm text-slate-400">
              <span className="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex items-center  text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>

          {/* item 2 */}
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg space-y-1">
            <div className="flex items-center  text-sm text-slate-400">
              <span className="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex items-center  text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>

          {/* item 3 */}
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg space-y-1">
            <div className="flex items-center text-sm text-slate-400">
              <span className="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex items-center  text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>

          {/* item 4 */}
          <div className="w-1/4 border border-slate-200 p-3 rounded-lg space-y-1">
            <div className="flex items-center  text-sm text-slate-400">
              <span className="material-symbols-rounded pr-2">payments</span>
              <p>Transactions</p>
            </div>
            <div className="text-blue-900 text-3xl">524,000</div>
            <div className="flex items-center  text-sm text-slate-400">
              <span className="material-symbols-rounded pr-1 text-green-500">
                trending_up
              </span>
              <p className="text-green-500 pr-1">3.5% </p>
              <p> vs 3 weeks report</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between space-x-4 mt-5">
          <div className="w-full border border-slate-200 p-3 rounded-lg h-96">
            <div className="text-md">Total Progress</div>
            <div className="h-full pb-3">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between space-x-4 mt-5">
          <div className="w-1/3 border border-slate-200 p-3 rounded-lg h-72">
            <div className="text-md">Total Progress</div>
            <div className="h-full pb-3">
              <Doughnut data={Ddata} />
            </div>
          </div>
          <div className="w-1/3 border border-slate-200 p-3 rounded-lg h-72">
            <div className="text-md">Total Progress</div>
            <div className="h-full pb-3">
              <Line data={Ldata} options={options} />
            </div>
          </div>
          <div className="w-1/3 border border-slate-200 p-3 rounded-lg h-72">
            <div className="text-md">Total Progress</div>
            <div className="h-full pb-3">
              <Line data={Ldata} options={options} />
            </div>
          </div>
        </div>
      </div>
      {/* main page layout end  */}
    </div>
  );
};

export default Dashboard;
