import React from "react";
import { Logo } from "../../Components/index";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navItem = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Help",
      path: "/help",
    },
    {
      name: "Teams",
      path: "/team",
    },
  ];
  return (
    <header className="bg-gray-400 w-full rounded fixed top-0 z-50">
      <nav className="flex  justify-between items-center">
        <div className="ml-5">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="flex justify-center items-center  m-3 text-xl font-mono">
          {navItem.map((item) => (
            <li key={item.name} className="m-2 p-2 text-pink-800">
              <button onClick={() => navigate(item.path)}>{item.name}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
