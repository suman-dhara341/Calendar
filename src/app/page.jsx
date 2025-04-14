import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

const page = () => {
  return (
    <div className="grid grid-cols-6 main-h-screen gap-3 p-1 w-full">
      <div className="md:col-span-1 hidden md:block bg-gray-100 dark:bg-gray-900 h-full rounded-xl ">
        <Navbar />
      </div>
      <div className="col-span-6 md:col-span-5 w-full ">
        <LandingPage />
      </div>
    </div>
  );
};

export default page;
