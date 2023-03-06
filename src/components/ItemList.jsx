import React, { useState } from "react";

export default function ItemList({ itemName, itemStatus }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <input
        type="checkbox"
        id={`${itemName}-check`}
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor={`${itemName}-check`}>{itemName}</label>
    </>
  );
}
