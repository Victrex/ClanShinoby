import {  NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ItemNav = ({ items }) => {
  let active;
  if (items.active === true) {
    active = "active";
  } else if (items.active === false) {
    active = "";
  }

  return (
    <li className={active}>
      <NavLink to={items.route}>
        <i className={items.icon}></i>{" "}
        <span className="spanNavItem"> {items.name}</span>
      </NavLink>
    </li>
  );
};
