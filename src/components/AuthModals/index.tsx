"use client";

import { useState } from "react";
import Modal from "../Modal";

export default function AuthModals({ showModal, setShowModal }) {
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  return (
    <>
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
