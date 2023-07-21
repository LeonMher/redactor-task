import React, { useState } from "react";
import { initialData } from "../data/data";
import Input from "@mui/material/Input";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import "../App.css";

export default function EditData() {
  const [data, setData] = useState(initialData);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleInputChange = (event) => {
    const newData = [...data];
    newData[selectedItemIndex].value = event.target.value;
    setData(newData);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedItemIndex(parseInt(event.target.value, 10));
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="selectItem">Выберите элемент:</label>
        <Select
          id="selectItem"
          className="form-control"
          value={selectedItemIndex}
          onChange={handleSelectChange}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="form-group">
        <label htmlFor="editValue">Редактировать значение:</label>
        <Input
          id="editValue"
          type="text"
          className="form-control"
          value={data[selectedItemIndex].value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
