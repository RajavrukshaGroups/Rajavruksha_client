import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";
import Logo from "../../components/assets/RRPL_Horizontal.png";
import "./style.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const [careers, setCareers] = useState([]);
  const [error, setError] = useState(null);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const response = await fetch("https://servermain.rajavrukshagroup.in/getCareerDetails");
        // const response = await fetch("http://localhost:4000/getCareerDetails");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("short-title", data.data);
        setCareers(data.data);
      } catch (err) {
        setError("Failed to fetch career details.");
        console.error(err);
      }
    };
    fetchCareerDetails();
  }, []);

  return (
    <header className="header" style={{ paddingLeft: "20px" }}>
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                      <ul>
                        <li>
                          <Link to="/sylvan-retreat">Sylvan-Retreat</Link>
                        </li>
                        <li>
                          <Link to="/eco-nest">Eco-nest</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/careers">Career</Link>
                      <ul>
                        {careers.map((career) => {
                          return (
                            <li>
                              <Link
                                to={`/careerDetails/${career._id}`}
                                className="text-uppercase"
                              >
                                {career?.shortTitle}
                              </Link>{" "}
                            </li>
                          );
                        })}
                        {/* <li>
                          <Link to="/bdeCareerForm">BDE</Link>
                        </li>
                        <li>
                          <Link to="/bdeIntern">BDE Intern</Link>
                        </li> */}
                      </ul>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="site"></div>

              {/* <div class="wrapper">
                <Link
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/RajavruskhaRealtors",
                      "_blank"
                    )
                  }
                >
                  <div class="bg-ico" id="facebook">
                    <i class="fab fa-facebook social  facebook fa-3x"></i>
                  </div>
                </Link>
                <a href="#">
                  <div class="bg-ico" id="pinterest">
                    <i class="fab fa-pinterest social  pinterest fa-3x"></i>
                  </div>
                </a>
                <a href="#">
                  <div class="bg-ico" id="twitter">
                    <i class="fab fa-twitter social  twitter fa-3x"></i>
                  </div>
                </a>
                <Link
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/rajavruksha_realtors/",
                      "_blank"
                    )
                  }
                >
                  <div class="bg-ico" id="instagram">
                    <i class="fab fa-instagram social  instagram fa-3x"></i>
                  </div>
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://x.com/Rajavrukshagrps", "_blank")
                  }
                  target="_blank"
                >
                  <div class="bg-ico" id="twitter">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                      alt="X Logo"
                      class="social x-logo"
                    />
                  </div>
                </Link>
                <a href="#">
                  <div class="bg-ico" id="whatsapp">
                    <i class="fab fa-whatsapp social  whatsapp fa-3x"></i>
                  </div>
                </a>
                <Link
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@Rajavruksha_Realtors",
                      "_blank"
                    )
                  }
                >
                  <div class="bg-ico" id="youtube">
                    <i class="fab fa-youtube social  youtube fa-3x"></i>
                  </div>
                </Link>
              </div> */}
              <div className="wrapper">
                <a
                  href="https://www.facebook.com/RajavruskhaRealtors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-ico" id="facebook">
                    <i className="fab fa-facebook social facebook fa-3x"></i>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/rajavruksha_realtors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-ico" id="instagram">
                    <i className="fab fa-instagram social instagram fa-3x"></i>
                  </div>
                </a>
                <a
                  href="https://x.com/Rajavrukshagrps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-ico" id="twitter">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                      alt="X Logo"
                      className="social x-logo"
                    />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@Rajavruksha_Realtors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-ico" id="youtube">
                    <i className="fab fa-youtube social youtube fa-3x"></i>
                  </div>
                </a>
              </div>

              <div
                id="search-overlay"
                className={`block ${show ? "show" : ""}`}
              >
                <div className="centered">
                  <div id="search-box">
                    <i
                      id="close-btn"
                      onClick={() => setShow(false)}
                      className="fa fa-times fa-2x"
                    ></i>
                    <form id="search-form" onSubmit={SubmitHandler}>
                      <input
                        id="search-text"
                        name="q"
                        placeholder="Type here..."
                        type="text"
                      />
                      <button id="search-button" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;