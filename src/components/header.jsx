import React, { useState } from "react";
import { Search, ArrowLeft } from "../static/icon";
import { Logo } from "../static/img";

const Header = ({ showSidebar, setShowSidebar }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="z-50 flex justify-between items-center h-20 w-full border-b border-b-grey-light-1">
      <div
        className={`px-4 flex justify-between items-center h-20 ${
          showSidebar ? "w-64" : "w-[3.625rem]"
        }`}
      >
        {showSidebar ? (
          <div className="flex text-xl font-semibold text-black gap-[9px]">
            <img
              src={Logo}
              alt="Logo"
              className="w-6 aspect-square object-contain"
            />
            <h2 className="hidden sm:block">AVUA HR-MGMT</h2>
          </div>
        ) : null}
        <button
          className={`${
            !showSidebar && "transform -scale-x-100"
          } hidden sm:inline-flex w-[1.625rem] aspect-square`}
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <img
            src={ArrowLeft}
            alt={ArrowLeft}
            className="w-[1.625rem] aspect-square"
          />
        </button>
      </div>
      <div
        className={`px-4 md:px-8 lg:px-12 flex justify-between ${
          showSidebar ? "w-[calc(100%-16rem)]" : "w-[calc(100%-3.625rem)]"
        } items-center h-20`}
      >
        {/* Search */}
        <div className="flex gap-4 bg-dusky-white items-center w-[26.0625rem] h-[2.75rem] my-[22px] mx-0 px-[1.05rem] rounded-[6px]">
          <span className="w-[1.375rem] h-[1.375rem] flex-shrink-0">
            <img
              src={Search}
              alt={Search}
              className="w-[1.375rem] h-[1.375rem] object-contain"
            />
          </span>
          <input
            type="text"
            id="search"
            value={value}
            name="search"
            className="hidden h-[1.375rem] text-[0.875rem] md:block focus:outline-none bg-dusky-white text-grey p-0"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Search for anything..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
