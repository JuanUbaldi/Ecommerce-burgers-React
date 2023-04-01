import React from "react";

function Button(props) {
  let buttonStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
    borderColor: props.colorBorder,
    color: props.colorLetter,
    paddingButton: props.paddingButton,
  };
  return (
    <button onClick={props.onClick} style={buttonStyle}>
      {props.children}
    </button>
  );
}

export default Button;
