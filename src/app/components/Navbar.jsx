import React from "react";
import { FiBox } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaHospitalUser } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";

const navList = [
  {
    icon: <FiBox className="text-blue-600" />,
    item: "Overview",
  },
  {
    icon: <CiCalendarDate className="text-blue-600" />,
    item: "Appointments",
    color: "bg-[#b6b8bb]",
  },
  {
    icon: <CiUser className="text-blue-600" />,
    item: "Doctors",
  },
  {
    icon: <FaHospitalUser className="text-blue-600" />,
    item: "Pathology Results",
  },
  {
    icon: <BiLogoGmail className="text-blue-600" />,
    item: "Chats",
  },
];

const navList2 = [
  {
    icon: <CiSearch className="text-blue-600" />,
    item: "Settings",
  },
  {
    icon: <IoMdLogOut className="text-blue-600" />,
    item: "Logout",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 border-b border-gray-400 mb-1">
        <p>LOGO</p>
        <FaArrowLeft />
      </div>
      {navList.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 px-4 py-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          {item.icon}
          <h1 className="text-sm font-semibold ">{item.item}</h1>
        </div>
      ))}
      <h1 className="font-bold p-4 text-sm">ACCOUNT</h1>
      {navList2.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 px-4 py-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          {item.icon}
          <h1 className="text-sm font-semibold">{item.item}</h1>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
