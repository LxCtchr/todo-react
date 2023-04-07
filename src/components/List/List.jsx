import React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";

import removeSvg from "../../assets/icons/remove.svg";
import "./List.scss";

function List({ items, isRemovable, onClick, onRemove }) {
  const removeList = (item) => {
    if (window.confirm("Вы действительно хотите удалить данный список?"))
      onRemove(item);
  };

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icon ? item.icon : <Icon color={item.color} />}</i>
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
