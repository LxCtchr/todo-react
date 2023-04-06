import React, { useState } from "react";
import List from "../List/List";
import Icon from "../Icon/Icon";

import closeSvg from "../../assets/icons/close.svg";

import "./AddList.scss";

function AddList({ colors }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);

  return (
    <section className="add-list">
      <List
        onClick={() => {
          setVisiblePopup(!visiblePopup);
        }}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="11"
                height="11"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить список",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="Close button"
            className="add-list__popup-close-btn"
          />
          <input className="field" type="text" placeholder="Название списка" />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Icon
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button className="button">Добавить</button>
        </div>
      )}
    </section>
  );
}

export default AddList;
