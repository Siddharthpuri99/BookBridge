import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const links = [
    {
      title: "Home",
      link: "/",
    },

    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Admin Profile",
      link: "/profile",
    },
  ];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  if (isLoggedIn === false) {
    links.splice(2, 2);
  }
  if (isLoggedIn === true && role === "user") {
    links.splice(4, 1);
  }
  if (isLoggedIn === true && role === "admin") {
    links.splice(3, 1);
  }
  return (
    <div className=" flex bg-zinc-800 text-white px-8 py-2 items-center justify-between ">
      <Link to={"/"} className="flex items-center">
        <img
          className="h-10 me-4"
          src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
          alt="..."
        />
        <h1 className="text-2xl font-semibold">Books Bridge</h1>
      </Link>
      <div className=" nav-links-bookheaven flex items-center gap-4">
        <div className="flex items-center justify-gap-4">
          {links.map((item, i) => (
            <div className="flex items-center" key={i}>
              {item.title === "Profile" || item.title === "Admin Profile" ? (
                <Link
                  to={item.link}
                  className=" rounded hover:text-blue-500 transition-all duration-300 px-4 py-1"
                  key={i}
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  to={item.link}
                  className="hover:text-blue-500 transition-all duration-300 px-4 py-1"
                  key={i}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {isLoggedIn === false && (
          <div className="flex gap-4">
            <Link
              to={"/LogIn"}
              className="px-4 py-1 font-bold hover:bg-white bg-blue-500 rounded hover: text-zinc-800 transition-all duration-300"
            >
              SignIn
            </Link>
            <Link
              to={"/SignUp"}
              className="px-4 py-1  font-bold hover:bg-white bg-blue-500 rounded hover: text-zinc-800 transition-all duration-300"
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
