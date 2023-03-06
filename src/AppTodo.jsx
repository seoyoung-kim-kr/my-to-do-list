import React, { useState } from "react";
import "./AppTodo.css";
import { FaMoon } from "react-icons/fa";
import ItemList from "./components/ItemList";
import { TiAdjustBrightness, TiTrash } from "react-icons/ti";

export default function AppTodo() {
  const [inputItem, setInputItem] = useState({
    id: "",
    item: "",
    status: "active",
  });
  const [itemList, setItemList] = useState(initialList);
  const [itemStatus, setItemStatus] = useState("all");

  const handleChange = (e) => {
    const { value } = e.target;
    setInputItem({ ...inputItem, item: value });
    console.log(inputItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = () => {
    if (inputItem.item) {
      setItemList([...itemList, inputItem]);
      setInputItem({ ...inputItem, item: "" });
    }
    console.log(itemList);
    // localStorage.setItem(inputItem.item, inputItem.status);
  };

  // const handleDelete = (itemKey) => {
  //   const filteredList = [...ItemList].filter(
  //     (item, index) => index !== itemKey
  //   );
  //   setItemList(filteredList);
  // };
  const handleFilterAll = () => {
    setItemStatus("all");
  };

  const handleFilterActive = () => {
    setItemStatus("active");
  };

  const handleFilterCompleted = () => {
    setItemStatus("completed");
  };

  return (
    <div className="app-container">
      <header>
        <div className="theme-btn">
          <FaMoon></FaMoon>
          {/* <TiAdjustBrightness></TiAdjustBrightness> */}
        </div>
        <div className="filter-btn-group">
          <div className="filter-btn" onClick={handleFilterAll}>
            All
          </div>
          <div className="filter-btn" onClick={handleFilterActive}>
            Active
          </div>
          <div className="filter-btn" onClick={handleFilterCompleted}>
            Completed
          </div>
        </div>
      </header>
      <div className="item-list-container">
        <ul className="item-list-ul">
          {itemList.map((itemList, i) => {
            if (itemList.status == itemStatus || itemStatus == "all") {
              return (
                <li key={i}>
                  <ItemList itemName={itemList.item} itemStatus={itemStatus} />
                  {/* <TiTrash onClick={handleDelete}></TiTrash> */}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="add-input-container">
        <form className="item-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="item"
            name="item"
            placeholder="Add Todo"
            className="add-text"
            onChange={handleChange}
            value={inputItem.item}
          />
          <input
            type="submit"
            value="Add"
            className="add-btn"
            onClick={handleAdd}
          />
        </form>
      </div>
    </div>
  );
}

const initialList = [
  {
    item: "공부하기",
    status: "active",
  },
  {
    item: "강의듣기",
    status: "completed",
  },
];
