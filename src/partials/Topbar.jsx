import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
  const [links] = useState([
    {
      name: "About Us",
      link: "/aboutus",
      drop: [],
    },
    {
      name: "Research",
      link: "/research",
      drop: [],
    },
    {
      name: "Publication",
      link: "/publication",
      drop: [],
    },
    {
      name: "Facility",
      link: "/facility",
      drop: [],
    },
    {
      name: "Members",
      link: "/member",
      drop: [
        {
          name: "Professors",
          link: "/member/professors",
        },
        {
          name: "Scholars",
          link: "/member/scholars",
        },
      ],
    },
    {
      name: "Cultural activity",
      link: "/culturalactivity",
      drop: [],
    },
    {
      name: "Contact",
      link: "/contact",
      drop: [],
    },
  ]);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark shadow flex-column">
        <div className="navbar-brand w-100 d-block d-flex align-items-center justify-content-between">
          <a className="navbar-brand pl-5" href="/">
            Logo
          </a>
          <form className="form-inline pr-2">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="form-control"
            />
            <button type="submit" className="btn btn-info">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/"
                exact
                //   data-toggle="dropdown"
              >
                Home
              </NavLink>
            </li>
            {links.map((link, index) => (
              <li className="nav-item" key={index + 1}>
                <NavLink
                  className="nav-link px-3"
                  to={link.link}
                  data-toggle={link.drop.length !== 0 ? "dropdown" : ""}
                >
                  {link.name}
                </NavLink>
                {link.drop.length !== 0 && (
                  <div className="dropdown-menu text-center w-100">
                    {link.drop.map((drop) => (
                      <Link
                        className="dropdown-item"
                        to={drop.link}
                        key={drop.link}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;