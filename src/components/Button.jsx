import React from "react";

function Button(props) {
  let buttonStyle = { backgroundColor: props.color };
  return <button style={buttonStyle}>{props.text}</button>;
}

export default Button;
