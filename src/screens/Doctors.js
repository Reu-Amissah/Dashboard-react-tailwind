import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import logo from "../assets/226411.png";

const Doctors = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function closeSidebar() {
    setIsOpen(!isOpen);
  }

  function handledropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="w-full mx-auto flex">
      <Sidebar
        handledropdown={handledropdown}
        closeSidebar={closeSidebar}
        isOpen={isOpen}
        isDropdownOpen={isDropdownOpen}
      ></Sidebar>

      {/* main page layout */}
      <div
        className={`pages min-h-full font-header bg-slate-50 ${
          !isOpen ? "w-full ml-32" : "w-full ml-64"
        } transition-all ease-in-out duration-300`}
      >
        <Navbar isOpen={isOpen} header={"Doctors"}></Navbar>
        {/* components  */}

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-3 mt-3">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
              Doctors Table
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Patient Id
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Contact
                </th>
                <th scope="col" class="px-6 py-3">
                  Blood Group
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b text-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-middle space-x-1"
                >
                  <span className="material-symbols-rounded bg-slate-100 rounded-full p-1 text-slate-200">
                    monochrome_photos
                  </span>
                  <div>Kwaku Trump</div>
                </th>
                <td class="px-6 py-4">2834792</td>
                <td class="px-6 py-4">kwaktrump@gmail.com</td>
                <td class="px-6 py-4">(321) 534 2343</td>
                <td class="px-6 py-4">AB</td>
              </tr>
              <tr class="bg-white border-b text-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Ekow Atizigi
                </th>
                <td class="px-6 py-4">2834792</td>
                <td class="px-6 py-4">kwaktrump@gmail.com</td>
                <td class="px-6 py-4">(321) 534 2343</td>
                <td class="px-6 py-4">AB</td>
              </tr>
              <tr class="bg-white border-b text-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Fiifi Zuckerberg
                </th>
                <td class="px-6 py-4">2834792</td>
                <td class="px-6 py-4">kwaktrump@gmail.com</td>
                <td class="px-6 py-4">(321) 534 2343</td>
                <td class="px-6 py-4">AB</td>
              </tr>
              <tr class="bg-white border-b text-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Nana Musk
                </th>
                <td class="px-6 py-4">2834792</td>
                <td class="px-6 py-4">kwaktrump@gmail.com</td>
                <td class="px-6 py-4">(321) 534 2343</td>
                <td class="px-6 py-4">AB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* main page layout end  */}
    </div>
  );
};

export default Doctors;
