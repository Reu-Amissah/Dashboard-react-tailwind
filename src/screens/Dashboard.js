import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full mx-auto h-96 flex">
      <div className="side-bar w-1/5 font-header">
        <div className="header">Jiraiya's Dashy</div>
        <div className="item">Departments</div>
        <div className="item">Departments</div>
      </div>
      <div className="pages w-4/5">
        <div className="nav-bar sticky top-0 bg-blue-200 font-header">
          navbar
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
