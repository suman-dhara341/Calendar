import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Calendar from "./Calendar ";

const LandingPage = () => {
  return (
    <div className="w-full">
      <header className="bg-gray-100 dark:bg-gray-900 flex items-center justify-between p-3 rounded-2xl w-full">
        <div className="relative w-[40rem]">
          <CiSearch
            className="absolute top-3 left-3 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search pathology results"
            className="outline-none bg-white border border-gray-500 rounded-2xl w-full px-10 py-2 focus:ring focus:ring-blue-400 dark:text-black"
            aria-label="Search pathology results"
          />
        </div>

        <div className="flex items-center gap-4">
          <IoIosNotifications className="cursor-pointer" />
          <div className="border-l pl-4 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#D6D6D6] cursor-pointer" />

            <div>
              <p className="text-sm font-semibold">Old Boluwatife</p>
              <p className="text-xs text-blue-600">PATIENT</p>
            </div>
          </div>
        </div>
      </header>
      <Calendar />
    </div>
  );
};

export default LandingPage;
