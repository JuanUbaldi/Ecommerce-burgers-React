import React from "react";

function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBotton: 8 }}>
      <label style={{ color: "yellow", width: "100px", marginRight: 4 }}>
        {props.title}
      </label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onInputChange}
        type="text"
      />
    </div>
  );
}

export default InputForm;
