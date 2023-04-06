import React from "react";
import classNames from "classnames";

import "./Icon.scss";

function Icon({ color, onClick, className }) {
  return (
    <i
      onClick={onClick}
      className={classNames("icon", { [`icon--${color}`]: color }, className)}
    ></i>
  );
}

export default Icon;
