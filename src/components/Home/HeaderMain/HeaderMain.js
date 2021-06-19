import React from "react";
import Dream from "../../../Image_Icon/Image/dream.svg";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center banner">
      <div className="col-md-5 offset-1 tag-line">
        <h1>
          DIGITAL SERVICES <br /> MAKES <br /> DREAMS COME TRUE
        </h1>
        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </strong>
        </p>
      </div>
      <div className="col-md-6 banner-image">
        <img src={Dream} alt="Technical Support" />
      </div>
    </main>
  );
};

export default HeaderMain;
