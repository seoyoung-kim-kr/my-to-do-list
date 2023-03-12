import React, { useState } from "react";

export default function ItemList({ itemName, itemStatus, getChecked }) {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
    getChecked(checked);
  };

  return (
    <>
      <input
        type="checkbox"
        id={`${itemName}-check`}
        value={checked}
        onChange={handleChange}
      />
      {!checked && (
        <label className="completed-item" htmlFor={`${itemName}-check`}>
          {itemName}
        </label>
      )}
      {checked && <label htmlFor={`${itemName}-check`}>{itemName}</label>}
    </>
  );
}
