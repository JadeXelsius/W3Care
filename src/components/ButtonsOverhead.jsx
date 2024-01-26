import React from "react";

const ButtonsOverhead = () => {
  return (
    <div>
      <div class="left-buttons">
        <button className="navbar-button">
          <i class="bx bx-edit"></i>Request a Quote
        </button>
        <button className="navbar-button">
          <i class="bx bx-user"></i>Client Login
        </button>
        <button className="navbar-button">
          <i class="bx bxs-phone-call"></i> +91-141-6066156, +1408-757-0455
        </button>
      </div>
      <div class="right-buttons">
        <button className="navbar-button">
          <i class="bx bxl-facebook"></i>
        </button>
        <button className="navbar-button">
          <i class="bx bxl-linkedin"></i>
        </button>
        <button className="navbar-button">
          <i class="bx bxl-twitter"></i>
        </button>
        <button className="navbar-button">
          <i class="bx bxl-skype"></i>
        </button>
      </div>
    </div>
  );
};

export default ButtonsOverhead;
