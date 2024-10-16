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
        <div className="sm:flex hidden gap-6">
          <Link href="/">
            <span className="text-black "> Wing</span>
            <span className="text-primary ">It</span>
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
            <span className="text-black "> Wing</span>
            <span className="text-primary ">It</span>
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
              <Link
                href="/"
                className="link "
                onClick={() => {
                  setToogleDropdown(false);
                }}
              >
                Home
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
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
