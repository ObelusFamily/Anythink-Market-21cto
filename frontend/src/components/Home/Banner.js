import React, { useEffect, useRef } from "react";
import logo from "../../imgs/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = (props) => {
  const searchRef = useRef();
  const searchBoxRef = useRef();

  function toggleSearchBox() {
    searchBoxRef.current.classList.toggle("hide");
  }

  useEffect(() => {
    searchRef.current.addEventListener("click", toggleSearchBox);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      searchRef.current.removeEventListener("click", toggleSearchBox);
    };
  }, []);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span ref={searchRef} id="get-part">
            A place to get
          </span>
          <span
            id="search-box-wrapper"
            className="mx-2 mw-25 position-relative hide"
            ref={searchBoxRef}
          >
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
