"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

export default function NavBar() {
  const [toogleDropdown, setToogleDropdown] = useState(false);

  return (
    <div className="w-full">
      <nav className=" gap-6 self-start mt-8 px-5 flex ">
        {/* desktop navigation */}
        <div className="sm:flex hidden gap-6 items-center">
          <Link href="/">
            <img src="wingit logo.png" width={100} />
          </Link>
          <Link href="/" className="text-primary ">
            Home
          </Link>
          <Link href="/" className="text-black ">
            About
          </Link>
          <Link href="/" className="text-black ">
            Menu
          </Link>
          <Link href="/" className="text-black ">
            Services
          </Link>
        </div>
        {/* mobile navigation */}
        <div className="sm:hidden flex justify-between w-full postion-relative">
          <Link href="/">
            <img src="wingit logo.png" width={80} />
          </Link>

          <div
            className="cursor-pointer"
            onClick={() => setToogleDropdown((prev) => !prev)}
            style={{ width: "fit-content" }}
          >
            <GiHamburgerMenu size={25} />
          </div>

          {toogleDropdown && (
            <div className="dropdown">
              {/* <Link
                href="/"
                className="link "
                onClick={() => {
                  setToogleDropdown(false);
                }}
              >
                Home
              </Link> */}

              <Link href="/">
                <img src="wingit logo.png" width={80} />
              </Link>
              <Link
                href="/"
                className=" link"
                onClick={() => {
                  setToogleDropdown(false);
                }}
              >
                About
              </Link>
              <Link
                href="/"
                className="link"
                onClick={() => {
                  setToogleDropdown(false);
                }}
              >
                Menu
              </Link>
              <Link
                href="/"
                className=" link"
                onClick={() => {
                  setToogleDropdown(false);
                }}
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  setToogleDropdown(false);
                }}
                className="cursor-pointer close-btn"
              >
                <MdRestaurantMenu size={20} />
              </button>

              {/* <div className="dropdown-logo ">
                <Link href="/">
                  <img src="wingit logo.png" width={180} />
                </Link>
              </div> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
