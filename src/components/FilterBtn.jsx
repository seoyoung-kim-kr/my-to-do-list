import React, { useEffect, useState } from "react";

export default function filterBtn() {
  const handleFilter = () => {
    {
      showItemList.map((itemList, i) => {
        return (
          <li key={i}>
            <ItemList itemName={itemList.item} />
            <TiTrash onClick={handleDelete}></TiTrash>
          </li>
        );
      });
    }
  };

  return;
  <>
    <div className="filter-btn">${filterItems}</div>; //
  </>;
}
