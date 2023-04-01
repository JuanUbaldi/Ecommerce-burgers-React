import React from "react";
import { Pulsar } from "@uiball/loaders";
import "./Loader.css";
function Loader() {
  return (
    <div className="loader">
      <div className="pulsar">
        <Pulsar size={70} speed={1.95} color="yellow" />
      </div>
    </div>
  );
}

export default Loader;
