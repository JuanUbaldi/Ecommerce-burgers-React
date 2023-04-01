import React, { useState } from "react";
import Button from "../Button";
import InputForm from "./InputForm";
import "./cartView.css";

function BuyForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;
    const newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);
  }
  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }
  return (
    <div className="buyForm">
    <form onSubmit={onSubmit}>
      <InputForm
        title="nombre"
        name="name"
        value={userData.name}
        onInputChange={onInputChange}
      />
      <InputForm
        title="telefono"
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
      />
      <InputForm
        title="Email"
        name="email"
        value={userData.email}
        onInputChange={onInputChange}
      />

      <Button
        
        color="black"
        colorLetter="yellow"
        colorBorder="yellow"
        onClick={onSubmit}
      >
        crear orden
      </Button>
    </form>
    </div>
  );
}

export default BuyForm;
