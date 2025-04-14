"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { MdDelete } from "react-icons/md";
import DataAdd from "./DataAdd";

export default function Modal({
  open,
  setOpen,
  daysInMonth,
  setdaysInMonth,
  id,
}) {
  const [formOpen, setFormOpen] = useState(false);
  const addEventToDate = (date, newEvent) => {
    setdaysInMonth((prev) =>
      prev.map((day) =>
        day.date === date ? { ...day, events: [...day.events, newEvent] } : day
      )
    );
  };

  const [editingEvent, setEditingEvent] = useState(null);

  const handleEdit = (dayId, eventIndex) => {
    const eventToEdit = daysInMonth[dayId].events[eventIndex];
    setEditingEvent({ dayId, eventIndex, data: eventToEdit });
    setFormOpen(true);
  };

  const updateEventInDate = (dayId, eventIndex, updatedEvent) => {
    setdaysInMonth((prev) =>
      prev.map((day, idx) =>
        idx === dayId
          ? {
              ...day,
              events: day.events.map((event, i) =>
                i === eventIndex ? updatedEvent : event
              ),
            }
          : day
      )
    );
    setEditingEvent(null);
  };

  const handleDelete = (dayId, eventIndex) => {
    setdaysInMonth((prev) =>
      prev.map((day, idx) =>
        idx === dayId
          ? {
              ...day,
              events: day.events.filter((_, i) => i !== eventIndex),
            }
          : day
      )
    );
  };

  const handleAddEvent = () => {
    setFormOpen(true);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[95%] max-w-[38rem] h-[80vh]">
            {formOpen ? (
              <DataAdd
                setFormOpen={setFormOpen}
                addEventToDate={addEventToDate}
                updateEventInDate={updateEventInDate}
                id={id}
                editingEvent={editingEvent}
              />
            ) : (
              <>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex items-center gap-3 justify-between sm:flex sm:items-start">
                    <button
                      type="button"
                      onClick={() => {
                        handleAddEvent();
                      }}
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    >
                      Add Event
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 w-full overflow-x-auto">
                  <table className="min-w-[800px] table-auto border border-collapse">
                    <thead>
                      <tr className="bg-gray-200 dark:text-black">
                        <th>No</th>
                        <th>Name</th>
                        <th>Categories</th>
                        <th>Doctor</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {daysInMonth[id]?.events?.map((item, index) => (
                        <tr
                          key={index}
                          className="text-center border-t dark:text-black"
                        >
                          <td>{index + 1}</td>
                          <td>{item?.name}</td>
                          <td>{item?.catagories || item?.categories}</td>
                          <td>{item?.doctors}</td>
                          <td>{item?.startTime}</td>
                          <td>{item?.endTime}</td>
                          <td>
                            <button
                              onClick={() => handleEdit(id, index)}
                              className="text-blue-500 hover:underline"
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => handleDelete(id, index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <MdDelete className="inline-block" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
