import React, { useState } from "react";
import ScheduleTable from "./ScheduleTable";
import LoadTable from "./LoadTable";

function App() {
  // define state for the scheduled staff members
  const [staffMembers, setStaffMembers] = useState([
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
  ]);
  const [schedule, setSchedule] = useState({
    monday: {
      morningUpstairs: "",
      morningDownstairs: "",
      morningParkingLot: "",
      lunchA: "",
      lunchB: "",
      lunchC: "",
      lunchD: "",
      afternoonUpstairs: "",
      afternoonDownstairs: "",
      afternoonParkingLot: "",
    },
    tuesday: {
      morningUpstairs: "",
      morningDownstairs: "",
      morningParkingLot: "",
      lunchA: "",
      lunchB: "",
      lunchC: "",
      lunchD: "",
      afternoonUpstairs: "",
      afternoonDownstairs: "",
      afternoonParkingLot: "",
    },
    wednesday: {
      morningUpstairs: "",
      morningDownstairs: "",
      morningParkingLot: "",
      lunchA: "",
      lunchB: "",
      lunchC: "",
      lunchD: "",
      afternoonUpstairs: "",
      afternoonDownstairs: "",
      afternoonParkingLot: "",
    },
    thursday: {
      morningUpstairs: "",
      morningDownstairs: "",
      morningParkingLot: "",
      lunchA: "",
      lunchB: "",
      lunchC: "",
      lunchD: "",
      afternoonUpstairs: "",
      afternoonDownstairs: "",
      afternoonParkingLot: "",
    },
    friday: {
      morningUpstairs: "",
      morningDownstairs: "",
      morningParkingLot: "",
      lunchA: "",
      lunchB: "",
      lunchC: "",
      lunchD: "",
      afternoonUpstairs: "",
      afternoonDownstairs: "",
      afternoonParkingLot: "",
    },
  });

  // define function to update the scheduled staff members
  // const handleScheduleUpdate = (day, timeSlot, staffMember) => {
  //   // check if staff member is already scheduled for a lunch slot on the same day
  //   if (timeSlot.includes('lunch')) {
  //     const otherLunchSlots = Object.keys(schedule[day]).filter(slot => slot.includes('lunch') && slot !== timeSlot);
  //     if (otherLunchSlots.some(slot => schedule[day][slot] === staffMember)) {
  //       alert('Staff member cannot be scheduled for consecutive lunch slots on the same day.');
  //       return;
  //     }
  //   }
  //   // update the schedule state with the selected staff member
  //   setSchedule((prevSchedule) => ({
  //     ...prevSchedule,
  //     [day]: {
  //       ...prevSchedule[day],
  //       [timeSlot]: staffMember,
  //     },
  //   }));
  // };
  const handleScheduleUpdate = (day, timeSlot, staffMember) => {
    // check if staff member has more than 7 shifts for the week
    const staffMemberShifts = Object.values(schedule)
      .flatMap((daySchedule) => Object.values(daySchedule))
      .filter((shift) => shift === staffMember);
    if (staffMemberShifts.length >= 7) {
      alert(
        "Staff member cannot be scheduled for more than 7 shifts per week."
      );
      return;
    }
    // check if staff member is already scheduled for a lunch slot on the same day
    if (timeSlot.includes("lunch")) {
      const otherLunchSlots = Object.keys(schedule[day]).filter(
        (slot) => slot.includes("lunch") && slot !== timeSlot
      );
      if (otherLunchSlots.some((slot) => schedule[day][slot] === staffMember)) {
        alert(
          "Staff member cannot be scheduled for consecutive lunch slots on the same day."
        );
        return;
      }
    }
    // const slotsOnDay = Object.keys(schedule[day]);
    // const otherSlots = slotsOnDay.filter((slot) => slot !== timeSlot);
    // if (otherSlots.some((slot) => schedule[day][slot] === staffMember)) {
    //   alert(
    //     "Staff member cannot be scheduled for two slots at the same time on the same day."
    //   );
    //   return;
    // }

    const morningSlots = [
      "morningUpstairs",
      "morningDownstairs",
      "morningParkingLot",
    ];
    if (
      morningSlots.includes(timeSlot) &&
      morningSlots.some((slot) => schedule[day][slot] === staffMember)
    ) {
      alert(
        "Staff member cannot be scheduled for multiple morning slots on the same day."
      );
      return;
    }

    const afternoonSlots = [
      "afternoonUpstairs",
      "afternoonDownstairs",
      "afternoonParkingLot",
    ];
    if (
      afternoonSlots.includes(timeSlot) &&
      afternoonSlots.some((slot) => schedule[day][slot] === staffMember)
    ) {
      alert(
        "Staff member cannot be scheduled for multiple afternoon slots on the same day."
      );
      return;
    }

    // update the schedule state with the selected staff member
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [timeSlot]: staffMember,
      },
    }));
  };

  // render the app UI
  return (
    <div>
      <h1>Schedule</h1>
      <ScheduleTable
        schedule={schedule}
        onScheduleUpdate={handleScheduleUpdate}
        staffMembers={staffMembers}
      />
      <h1>Load</h1>
      <LoadTable schedule={schedule} />
    </div>
  );
}

export default App;
