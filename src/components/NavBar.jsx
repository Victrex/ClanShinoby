import { useState } from "react";
import { ItemNav } from "./ItemNav";

export const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [Item, setItem] = useState([
    { name: "Inicio", icon: "fa-solid fa-house", active: false, route: "./dist/" },
    {
      name: "Pagos",
      icon: "fa-solid fa-coins",
      active: false,
      route: "./dist/Pagos",
    },
    {
      name: "Alumnos",
      icon: "fa-solid fa-users-line",
      active: false,
      route: "./dist/Alumnos",
    },
    
  ]);

  const items = (items) => {
    const activeNav = () => {
      console.log("activo");
    };
    return items.map((e) => (
      <ItemNav onClick={activeNav} key={e.name} items={e} />
    ));
  };

  return <ul>{items(Item)}</ul>;
};
