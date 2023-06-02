import React from "react";
import logo from "../assets/226411.png";

const Dashboard = () => {
  return (
    <div className="w-full mx-auto h-96 flex">
      <div className="side-bar w-1/5 h-screen font-header bg-slate-800 text-slate-100 space-y-2">
        <div className="header w-11/12 mx-auto flex justify-start align-middle text-xl font-semibold mt-6 mb-6">
          <img src={logo} className="w-6 h-6 mr-2"></img>Jiraiya's Dashy
        </div>
        <div className="item w-11/12 mx-auto bg-slate-700 p-3 rounded-lg flex cursor-pointer">
          <span class="material-symbols-rounded mr-2">dashboard</span>
          Dashboard
        </div>
        <div className="item w-11/12 mx-auto text-slate-300 p-3 rounded-lg flex cursor-pointer hover:bg-slate-700 hover:text-cyan-500 transition delay-75 ease-in-out">
          <span class="material-symbols-rounded mr-2">domain</span>
          Departments
        </div>
        <div className="item w-11/12 mx-auto text-slate-300 p-3 rounded-lg flex cursor-pointer hover:bg-slate-700 hover:text-slate-50 transition delay-75 ease-in-out">
          <span class="material-symbols-rounded mr-2">medication</span>
          Doctors
        </div>
      </div>
      <div className="pages w-4/5">
        <div className="nav-bar sticky top-0 font-header">navbar</div>
      </div>
    </div>
  );
};

export default Dashboard;
