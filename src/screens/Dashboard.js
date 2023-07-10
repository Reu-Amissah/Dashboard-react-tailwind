import React, { useState } from "react";

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
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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
      <Sidebar
        handledropdown={handledropdown}
        closeSidebar={closeSidebar}
        isOpen={isOpen}
        isDropdownOpen={isDropdownOpen}
      ></Sidebar>

      {/* main page layout */}
      <div
        className={`pages px-3 font-header ${
          !isOpen ? "w-full ml-32" : "w-full ml-64"
        } transition-all ease-in-out duration-300`}
      >
        <Navbar isOpen={isOpen}></Navbar>
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
            <div className="h-full pb-3 flex justify-center items-center">
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
