import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const MobileMenu = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(0);
  const [menus, setMenus] = useState([
    {
      id: 1,
      title: "Home",
      link: "/home",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects",
      submenu: [
        {
          id: 31,
          title: "Sylvan-Retreat",
          link: "/sylvan-retreat",
        },
        // {
        //   id: 32,
        //   title: "Eco-Nest",
        //   link: "/eco-nest",
        // },
        {
          id: 33,
          title: "Plumeria",
          link: "/plumeria",
        },
      ],
    },
    {
      id: 88,
      title: "Contact",
      link: "/contact",
    },
  ]);
  const [error, setError] = useState(null);

  const toggleMenu = () => {
    setIsMenuShow((prevState) => !prevState);
  };

  const toggleSubmenu = (id) => {
    setIsOpen((prevState) => (prevState === id ? 0 : id));
  };

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const response = await fetch(
          "https://rajavruksha-server.rajavrukshagroup.in/getCareerDetails"
          // "https://rrplserver.rajavrukshagroup.in/getCareerDetails"
          // "http://localhost:4010/getCareerDetails"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const careers = data.data.map((career) => ({
          id: career._id,
          title: career.shortTitle,
          link: `/careerDetails/${career._id}`,
        }));

        setMenus((prevMenus) => [
          ...prevMenus,
          {
            id: 6,
            title: "Careers",
            link: "/careers",
            submenu: careers,
          },
        ]);
      } catch (err) {
        setError("Failed to fetch career details.");
        console.error(err);
      }
    };

    fetchCareerDetails();
  }, []);

  return (
    <div className="responsiveMenu">
      <nav
        id="mobileMenu"
        className={`mobileMenu ${isMenuShow ? "active" : ""}`}
      >
        <ul className="responsivemenu">
          {menus.map((item) => (
            <li key={item.id}>
              {item.submenu ? (
                <p
                  onClick={() => toggleSubmenu(item.id)}
                  aria-expanded={item.id === isOpen}
                >
                  {item.title}
                </p>
              ) : (
                <Link to={item.link}>{item.title}</Link>
              )}

              {item.submenu && (
                <Collapse in={item.id === isOpen}>
                  <ul className="sub-menu">
                    {item.submenu.map((submenu) => (
                      <li key={submenu.id}>
                        <Link to={submenu.link}>{submenu.title}</Link>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`spinner-master ${isMenuShow ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div id="spinner-form" className="spinner-spin">
          <div
            style={{ backgroundColor: isMenuShow ? "white" : "black" }}
            className="spinner diagonal part-1"
          ></div>
          <div
            style={{ backgroundColor: isMenuShow ? "white" : "black" }}
            className="spinner horizontal"
          ></div>
          <div
            style={{ backgroundColor: isMenuShow ? "white" : "black" }}
            className="spinner diagonal part-2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
