import React from "react";

function LoadTable(props) {
  const { schedule } = props;

  // function to calculate the load for each staff member in a given day
  const calculateLoad = (day, staffMember) => {
    const staffSchedule = Object.values(schedule[day]);
    const load = staffSchedule.filter((slot) => slot === staffMember).length;
    return load;
  };

  // function to calculate the total load for each staff member in the week
  const calculateTotalLoad = (staffMember) => {
    let totalLoad = 0;
    Object.keys(schedule).forEach((day) => {
      totalLoad += calculateLoad(day, staffMember);
    });
    return totalLoad;
  };

  // render the load table
  return (
    <table>
      <thead>
        <tr>
          <th>Staff Member</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>X1</td>
          <td>{calculateLoad("monday", "X1")}</td>
          <td>{calculateLoad("tuesday", "X1")}</td>
          <td>{calculateLoad("wednesday", "X1")}</td>
          <td>{calculateLoad("thursday", "X1")}</td>
          <td>{calculateLoad("friday", "X1")}</td>
          <td>{calculateTotalLoad("X1")}</td>
        </tr>
        <tr>
          <td>X2</td>
          <td>{calculateLoad("monday", "X2")}</td>
          <td>{calculateLoad("tuesday", "X2")}</td>
          <td>{calculateLoad("wednesday", "X2")}</td>
          <td>{calculateLoad("thursday", "X2")}</td>
          <td>{calculateLoad("friday", "X2")}</td>
          <td>{calculateTotalLoad("X2")}</td>
        </tr>
        <tr>
          <td>X3</td>
          <td>{calculateLoad("monday", "X3")}</td>
          <td>{calculateLoad("tuesday", "X3")}</td>
          <td>{calculateLoad("wednesday", "X3")}</td>
          <td>{calculateLoad("thursday", "X3")}</td>
          <td>{calculateLoad("friday", "X3")}</td>
          <td>{calculateTotalLoad("X3")}</td>
        </tr>
        <tr>
          <td>X4</td>
          <td>{calculateLoad("monday", "X4")}</td>
          <td>{calculateLoad("tuesday", "X4")}</td>
          <td>{calculateLoad("wednesday", "X4")}</td>
          <td>{calculateLoad("thursday", "X4")}</td>
          <td>{calculateLoad("friday", "X4")}</td>
          <td>{calculateTotalLoad("X4")}</td>
        </tr>
        <tr>
          <td>X5</td>
          <td>{calculateLoad("monday", "X5")}</td>
          <td>{calculateLoad("tuesday", "X5")}</td>
          <td>{calculateLoad("wednesday", "X5")}</td>
          <td>{calculateLoad("thursday", "X5")}</td>
          <td>{calculateLoad("friday", "X5")}</td>
          <td>{calculateTotalLoad("X5")}</td>
        </tr>
        <tr>
          <td>X6</td>
          <td>{calculateLoad("monday", "X6")}</td>
          <td>{calculateLoad("tuesday", "X6")}</td>
          <td>{calculateLoad("wednesday", "X6")}</td>
          <td>{calculateLoad("thursday", "X6")}</td>
          <td>{calculateLoad("friday", "X6")}</td>
          <td>{calculateTotalLoad("X6")}</td>
        </tr>
        <tr>
          <td>X7</td>
          <td>{calculateLoad("monday", "X7")}</td>
          <td>{calculateLoad("tuesday", "X7")}</td>
          <td>{calculateLoad("wednesday", "X7")}</td>
          <td>{calculateLoad("thursday", "X7")}</td>
          <td>{calculateLoad("friday", "X7")}</td>
          <td>{calculateTotalLoad("X7")}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default LoadTable;
