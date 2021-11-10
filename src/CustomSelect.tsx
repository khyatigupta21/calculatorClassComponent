import React, { useState } from "react";
function CustomSelect(props:any) {
  const [data] = useState(props.data);
  const [selectedData, updateSelectedData] = useState("");
  function handleChange(e:any) {
    updateSelectedData(e.target.value);
    if (props.onSelectChange) props.onSelectChange(selectedData);
  }
  let options = data.map((data:any) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));
  return (
    <select
      name="customSearch"
      className="custom-search-select"
      onChange={handleChange}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
}
export default CustomSelect;