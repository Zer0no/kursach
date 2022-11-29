import React from "react";
import "./itemStyle.css";

const Item = ({name, age,description, img, category, key}) => (
  <div key={key} className="item-container">
    <img src={img} alt={name} className="item-image"/>
    <div class="aboutPet">
      <span className="item-label"> <span class="boldName">{name}, </span>{age}</span>
      <span className="item-description">{description}</span>
    </div>
  </div>
);

export default Item;