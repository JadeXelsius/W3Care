import React, { useState } from "react";
import photo from "../assets/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (name) => {
    if (dropdown === name) {
      setDropdown(null);
    } else {
      setDropdown(name);
    }
  };

  return (
    <nav>
      <a href="https://www.w3care.com/">
        <img
          src={photo}
          alt="Logo"
          class="logo"
          href="https://www.w3care.com/"
        />
      </a>
      <ul>
        <li>
          <button>Home</button>
        </li>
        {/* Company Dropdown */}
        <li>
          <button onClick={() => toggleDropdown("company")}>Company▾</button>
          {dropdown === "company" && (
            <ul>
              <li>Company Index</li>
              <li>Infrastructure</li>
              <li>W3care Team</li>
              <li>Vision & Values</li>
              <li>Career</li>
            </ul>
          )}
        </li>

        {/* Services Dropdown */}
        <li>
          <button onClick={() => toggleDropdown("services")}>Services▾</button>
          {dropdown === "services" && (
            <ul>
              <li>Services Index</li>
              <li>
                <a class="dropdown-item" href="#">
                  Addon/Extension &amp; Plugin Development
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Content Management System
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Logo Design Services
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PSD to XHTML/HTML 5
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  QA &amp; Testing Services
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Web &amp; UI Design
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Web Development
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Website Maintenance Services
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Website Redesign
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Upgrade ExpressionEngine
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Technologies Dropdown */}
        <li>
          <button onClick={() => toggleDropdown("technologies")}>
            Technologies▾
          </button>
          {dropdown === "technologies" && (
            <ul>
              <li>Open Source Development Platforms</li>
              <li>Open Source Development Platforms</li>
              <li>PHP Frameworks</li>
              <li>Web & Graphic Design</li>
              <li>PHP Development</li>
              <li>App Development</li>
            </ul>
          )}
        </li>

        {/* Additional main menu items */}
        <li>
          <button onClick={() => toggleDropdown("company")}>
            Industry Vertical▾
          </button>
          {dropdown === "company" && (
            <ul>
              <li>
                <a class="dropdown-item" href="#">
                  Booking Engines
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Advertising &amp; Publishing
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Ecommerce &amp; Shopping
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Financial Services
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Travel &amp; Transportation
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Social Networking/Community Portal
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Real Estate &amp; Property
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Media &amp; Entertainment
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="##">
                  Education &amp; Training
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button onClick={() => toggleDropdown("company")}>Portfolio▾</button>
          {dropdown === "company" && (
            <ul>
              <li>
                <a class="dropdown-item" href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Industry Portfolio
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Technolgy Portfolio
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Design Portfolio
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button>Blog</button>
        </li>
        <li>
          <button onClick={() => toggleDropdown("company")}>Highlights▾</button>
          {dropdown === "company" && (
            <ul>
              <li>Development Process</li>
              <li>Engagement Model</li>
            </ul>
          )}
        </li>
        <li>
          <button class="WeHiring">WE ARE HIRING</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
