import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const DataAdd = ({
  setFormOpen,
  id,
  addEventToDate,
  updateEventInDate,
  editingEvent,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    categories: "",
    doctors: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    if (editingEvent) {
      setFormData(editingEvent.data);
    }
  }, [editingEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormOpen(false);

    if (editingEvent) {
      updateEventInDate(editingEvent.dayId, editingEvent.eventIndex, formData);
    } else {
      addEventToDate(id + 1, formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("New appointment:", formData);
  //     setFormOpen(false);
  //     addEventToDate(id + 1, formData);
  //   };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">MAKE NEW APPOINTMENT</h2>
        <button className="text-lg font-bold">&times;</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 dark:text-black">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="categories"
          value={formData.categories}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Categories</option>
          <option value="Dental">Dental</option>
          <option value="Cardiology">Cardiology</option>
          <option value="General">General</option>
        </select>

        <select
          name="doctors"
          value={formData.doctors}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Doctors</option>
          <option value="Dr. A">Dr. A</option>
          <option value="Dr. B">Dr. B</option>
          <option value="Dr. C">Dr. C</option>
        </select>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              START TIME
            </label>
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
              <FaRegClock size={16} className="mr-2 text-gray-500" />
              <select
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
                className="flex-1 outline-none bg-white"
              >
                <option value="">--</option>
                <option value="08:00 AM">08:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              END TIME
            </label>
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
              <FaRegClock size={16} className="mr-2 text-gray-500" />
              <select
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
                className="flex-1 outline-none bg-white"
              >
                <option value="">--</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:00 PM">01:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full py-2 mt-4"
        >
          MAKE NEW APPOINTMENT
        </button>
      </form>
    </div>
  );
};

export default DataAdd;
