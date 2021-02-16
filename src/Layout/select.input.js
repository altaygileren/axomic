import React from "react";

const Selectinput = ({ limit, changeInput }) => {
  return (
    <select
      value={limit}
      onChange={(e) => {
        changeInput(e.target.value);
      }}
    >
      <option defaultValue value={10}>
        10
      </option>
      <option value={20}>20</option>
      <option value={30}>30</option>
      <option value={50}>50</option>
    </select>
  );
};

export default Selectinput;