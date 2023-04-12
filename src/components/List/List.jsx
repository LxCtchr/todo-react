import React from "react";
import classNames from "classnames";
import axios from "axios";

import Icon from "../Icon/Icon";
import removeSvg from "../../assets/icons/remove.svg";
import "./List.scss";

function List({
  items,
  isRemovable,
  onClick,
  onRemove,
  onClickItem,
  activeItem,
}) {
  const removeList = (item) => {
    axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
      onRemove(item.id);
    });
  };

  console.log(items);
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, {
            active: item.active
              ? item.active
              : activeItem && activeItem.id === item.id,
          })}
          onClick={onClickItem ? () => onClickItem(item) : null}
        >
          <i>{item.icon ? item.icon : <Icon color={item.color.name} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Close button"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default List;
