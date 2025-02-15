import React from "react";
import PrimaryButton from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

export const Navbar = () => {
  return (
    <div className="navbar fixed justify-between top-0 bg-base-100 z-50 border-b border-stone-300 border-solid border-1 shadow-md ">
      <div className="w-[200px] hidden sm:block" />

      <div className="">
        <a className="btn btn-ghost normal-case text-xl max-w-[300px]" href="/">
          <img
            src={"/syncGuide_logo.svg"}
            alt="Logo"
            // height='40px'
            width={"170px"}
          />
        </a>
      </div>
      
      <a href="https://admin.syncguide.app">
        <div className="">
          <SecondaryButton>Try SyncGuide</SecondaryButton>
        </div>
      </a>

      {/* <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Homepage</a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};
