"use client";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "./Modal";

const dayName = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const Calendar = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [daysInMonth, setdaysInMonth] = useState([
    { date: 1, events: [] },
    { date: 2, events: [] },
    { date: 3, events: [] },
    { date: 4, events: [] },
    { date: 5, events: [] },
    { date: 6, events: [] },
    { date: 7, events: [] },
    { date: 8, events: [] },
    { date: 9, events: [] },
    { date: 10, events: [] },
    { date: 11, events: [] },
    { date: 12, events: [] },
    { date: 13, events: [] },
    { date: 14, events: [] },
    { date: 15, events: [] },
    { date: 16, events: [] },
    { date: 17, events: [] },
    { date: 18, events: [] },
    { date: 19, events: [] },
    { date: 20, events: [] },
    { date: 21, events: [] },
    { date: 22, events: [] },
    { date: 23, events: [] },
    { date: 24, events: [] },
    { date: 25, events: [] },
    { date: 26, events: [] },
    { date: 27, events: [] },
    { date: 28, events: [] },
    { date: 29, events: [] },
    { date: 30, events: [] },
    { date: 31, events: [] },
  ]);

  console.log(daysInMonth);

  const openModal = ({ openId }) => {
    setOpen(true);
    setId(openId);
  };

  return (
    <div className="mt-2 p-3">
      <div className="flex items-center justify-between">
        <h1 className="text-[#F40C34] font-bold text-sm">Appointments</h1>
        <div className="flex items-center justify-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-2">
        <select className="border rounded-xl w-72 p-1 text-sm">
          <option>This month:October</option>
        </select>
        <h1 className="text-sm font-semibold">October</h1>
        <div className="flex items-center gap-2 mt-4">
          <CiCirclePlus />
          <div className="flex border border-gray-600 rounded-lg overflow-hidden w-max">
            {["DAY", "WEEK", "MONTH"].map((item, index) => (
              <div
                className="px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer border-l border-gray-600 "
                key={index}
              >
                <h1 className="text-sm font-medium">{item}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-max border border-gray-400 rounded-xl w-full text-center overflow-hidden">
          <thead>
            <tr>
              {dayName.map((item, index) => (
                <th
                  key={index}
                  className="border border-gray-400 p-2 text-sm md:text-base"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4].map((row, rowIndex) => (
              <tr key={rowIndex}>
                {daysInMonth
                  .slice(rowIndex * 7, rowIndex * 7 + 7)
                  .map((day, index) => (
                    <td
                      key={index}
                      onClick={() => openModal({ openId: day.date - 1 })}
                      className="border p-3 md:p-5 text-sm md:text-base border-gray-400 hover:bg-gray-100 cursor-pointer dark:hover:text-black"
                    >
                      {day.date}
                      {day?.events && day?.events.length > 0 ? (
                        <p className="bg-[#1F0445] rounded-full p-2 h-7 w-7 text-white flex items-center justify-center mx-auto mt-1">
                          {day?.events?.length}
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={open}
        setOpen={setOpen}
        daysInMonth={daysInMonth}
        setdaysInMonth={setdaysInMonth}
        id={id}
      />
    </div>
  );
};

export default Calendar;
