import React from "react";

function List({ items }) {
  return (
    <ul className="todo__list">
      {items.map(item => (
        <li>
          {item.icon}
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;