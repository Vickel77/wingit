"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { usePathname } from "next/navigation";
import Modal from "../Modal";

export default function NavBar() {
  const [toogleDropdown, setToogleDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="w-full container">
        <nav className=" gap-6 self-start mt-8 px-5 flex ">
          {/* desktop navigation */}
          <div className="sm:flex hidden gap-6 items-center justify-between w-full">
            <Link href="/">
              <img src="wingit logo.png" width={100} />
            </Link>
            <div className="flex gap-6 pr-4">
              {/* <Link href="/" className="text-primary ">
              Home
            </Link> */}
              <Link
                href="/"
                className={
                  pathname.includes("about") ? "text-primary" : "text-black"
                }
              >
                About
              </Link>
              <Link
                href="/menu"
                className={
                  pathname.includes("menu") ? "text-primary" : "text-black "
                }
              >
                Menu
              </Link>
              <Link
                href="/"
                className={
                  pathname.includes("contact-us")
                    ? "text-primary "
                    : "text-black "
                }
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="text-black ml-6"
                onClick={() => setShowModal(true)}
              >
                Log In
              </Link>
              <div className="cart-icon relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.86399 16.455C4.40999 18.638 4.68299 19.729 5.49599 20.365C6.30999 21 7.43499 21 9.68499 21H14.315C16.565 21 17.69 21 18.505 20.365C19.318 19.729 19.591 18.638 20.136 16.455C20.994 13.023 21.423 11.308 20.523 10.154C19.622 9 17.853 9 14.316 9H9.68499C6.14699 9 4.37899 9 3.47799 10.154C2.94899 10.831 2.87799 11.702 3.08399 13"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4"
                    stroke="black"
                    stroke-width="1.5"
                  />
                  <path
                    d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z"
                    stroke="black"
                    stroke-width="1.5"
                  />
                </svg>
                <div className="red-dot">2</div>
              </div>
            </div>
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
                <Link
                  href="/"
                  className=" link"
                  onClick={() => {
                    setToogleDropdown(false);
                    setShowModal(true);
                  }}
                >
                  Login
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

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {/* Login modal here */}
        <div className="form-container  ">
          <form action="" className="mb-3">
            <button className="google-btn flex align-center justify-center gap-4 w-full py-2">
              <div className="google-icon">
                <img src="google-icon.png" alt="" width={"25"} />
              </div>
              <p>Continue with Google</p>
            </button>
            <br />
            <div className="divider flex justify-between items-center">
              <div className="hr-line"></div>
              <p>OR</p>
              <div className="hr-line"></div>
            </div>
            <br />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="mb-4"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="mb-4"
            />

            <button
              type="submit"
              className="bg-primary w-full text-center py-2 submit-btn"
            >
              Login
            </button>
          </form>
          <div
            className="signup-link flex justify-center cursor-pointer"
            onClick={() => {
              setShowModal2(true);
              setShowModal(false);
            }}
          >
            <p>Sign Up</p>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        {/* Sign up modal here */}
        <div className="form-container  ">
          <form action=" " className="mb-3">
            <button className="google-btn flex align-center justify-center gap-4 w-full py-2">
              <div className="google-icon">
                <img src="google-icon.png" alt="" width={"25"} />
              </div>
              <p>Continue with Google</p>
            </button>
            <br />
            <div className="divider flex justify-between items-center">
              <div className="hr-line"></div>
              <p>OR</p>
              <div className="hr-line"></div>
            </div>
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Firstname"
              className="mb-4"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Lastname"
              className="mb-4"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="mb-4"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="mb-4"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="mb-4"
            />

            <button
              type="submit"
              className="bg-primary w-full text-center py-2 submit-btn"
              onClick={(e) => {
                e.preventDefault;

                setShowModal3(true);
                setShowModal2(false);
              }}
            >
              Sign up
            </button>
          </form>

          <div
            className="signup-link flex justify-center cursor-pointer"
            onClick={() => {
              setShowModal(true);
              setShowModal2(false);
            }}
          >
            <p>Login</p>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        {/* Created account successfully */}
        <div className="form-container  ">
          <form action="" className="mb-3">
            <div className="success-container text-center px-2 py-3">
              <p>
                <strong>Account created successfully</strong>
              </p>
              <p>Kindly login to proceed</p>
            </div>
            <br />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="mb-4"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="mb-4"
            />

            <button
              type="submit"
              className="bg-primary w-full text-center py-2 submit-btn"
            >
              Login
            </button>
          </form>
          <div
            className="signup-link flex justify-center cursor-pointer"
            onClick={() => {
              setShowModal2(true);
              setShowModal3(false);
            }}
          >
            <p>Sign Up</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
