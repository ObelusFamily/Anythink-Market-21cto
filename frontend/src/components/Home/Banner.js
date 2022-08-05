import React from "react";
import logo from "../../imgs/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <span className="mx-2 mw-25 position-relative">
            <input
              id="search-box"
              style={{ minWidth: "400px" }}
              className="w-25 p-2"
              placeholder="What is it you truly desire?"
              value={props.term}
              onChange={(e) => props.setTerm(e.target.value)}
            ></input>
            <AiOutlineSearch
              className="position-absolute text-black text-muted"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                right: "2%",
                fontSize: "x-large",
              }}
            />
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
