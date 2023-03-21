import React from "react";

function ScheduleTable({ schedule, onScheduleUpdate, staffMembers }) {
  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const timeSlots = [
    "morningUpstairs",
    "morningDownstairs",
    "morningParkingLot",
    "lunchA",
    "lunchB",
    "lunchC",
    "lunchD",
    "afternoonUpstairs",
    "afternoonDownstairs",
    "afternoonParkingLot",
  ];

  const handleStaffSelect = (event, day, timeSlot) => {
    const staffMember = event.target.value;
    const staffCount = Object.values(schedule[day]).filter(
      (s) => s === staffMember
    ).length;

    if (staffCount < 2) {
      onScheduleUpdate(day, timeSlot, staffMember);
    } else {
      alert(
        "This staff member has already been assigned to 2 shifts for this day."
      );
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {daysOfWeek.map((day) => (
            <th key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((slot) => (
          <tr key={slot}>
            <td>{slot.replace(/([A-Z])/g, " $1")}</td>
            {daysOfWeek.map((day) => (
              <td key={`${day}-${slot}`}>
                <select
                  value={schedule[day][slot]}
                  onChange={(event) => handleStaffSelect(event, day, slot)}
                >
                  <option value=""></option>
                  {staffMembers.map((staffMember) => (
                    <option key={staffMember} value={staffMember}>
                      {staffMember}
                    </option>
                  ))}
                </select>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScheduleTable;
