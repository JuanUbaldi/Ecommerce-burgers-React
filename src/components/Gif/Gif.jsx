import React from "react";
import { useEffect, useState } from "react";
import "./banner.css";
function Gif() {
  const [gif, setGif] = useState([]);
  console.log(gif);
  const urlImg =
    "https://api.giphy.com/v1/gifs/search?q=burger&api_key=ZmhiMfiuKPUIbKGZZEFJxHZRMs8j2Y14";
  useEffect(() => {
    fetch(urlImg)
      .then((response) => response.json())
      .then((giphy) => {
        let datos = giphy.data[5].images.original.url;
        setGif(datos);
      });
  }, []);

  return (
    <div className="banner">
      <div className="imgBanner">
        <img className="imgbanner" src={gif} alt="banner" />
      </div>
      <div className="textBanner">
        <div className="textBanner1">
          <h2>Comer hamburguesa es darte un gustito</h2>
        </div>
        <div className="textBanner2">
          <h2>y darte un gustito hace bien</h2>
        </div>
      </div>
    </div>
  );
}

export default Gif;
