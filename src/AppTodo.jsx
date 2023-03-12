import React, { useRef, useState, useEffect } from "react";
import "./AppTodo.css";
import { FaMoon } from "react-icons/fa";
import ItemList from "./components/ItemList";
import { TiAdjustBrightness, TiTrash } from "react-icons/ti";

export default function AppTodo() {
  const [checked, setChecked] = useState(true);
  const [inputItem, setInputItem] = useState({
    item: "",
    status: "active",
  });
  const [itemList, setItemList] = useState(initialList);
  const [itemStatus, setItemStatus] = useState("all");

  useEffect(() => {
    setItemList(JSON.parse(localStorage.getItem("item")).item);
    console.log(itemList);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputItem({ ...inputItem, item: value });
    console.log(inputItem);
    saveLocal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const saveLocal = () => {
    const itemListObj = { item: itemList };
    window.localStorage.setItem("item", JSON.stringify(itemListObj));
  };

  let nextId = useRef(3);
  const handleAdd = () => {
    if (inputItem.item) {
      setItemList([
        ...itemList,
        { id: nextId.current, item: inputItem.item, status: inputItem.status },
      ]);
      setInputItem({ ...inputItem, item: "" });
      nextId.current += 1;
      console.log(itemList);
    }
    // localStorage.setItem(inputItem.item, inputItem.status);
  };

  const handleFilterAll = () => {
    setItemStatus("all");
  };

  const handleFilterActive = () => {
    setItemStatus("active");
  };

  const handleFilterCompleted = () => {
    setItemStatus("completed");
  };

  const getChecked = (isCheck) => {
    if (isCheck) setChecked((prev) => !prev);
    console.log(checked);
  };

  const getID = (id) => {
    if (checked)
      setItemList(
        itemList.map((item) => {
          if (item.id === id) item.status = "completed";
          return item;
        })
      );
    console.log(itemList);
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
                  <ItemList
                    itemName={itemList.item}
                    itemStatus={itemStatus}
                    getChecked={getChecked}
                    getID={() => getID(itemList.item.id)}
                  />
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
    id: 1,
    item: "공부하기",
    status: "active",
  },
  {
    id: 2,
    item: "강의듣기",
    status: "completed",
  },
];
