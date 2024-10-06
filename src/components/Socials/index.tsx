import React from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import YouTube from "../Icons/YouTube";
import Link from "next/link";

const Socials = () => {
  return (
    <div className=" flex gap-3 ">
      <Link className="hover:opacity-50" href="#">
        <Twitter size={30} />
      </Link>
      <Link className="hover:opacity-50" href="#">
        <Instagram size={30} />
      </Link>
      <Link className="hover:opacity-50" href="#">
        <Facebook size={30} />
      </Link>
      <Link className="hover:opacity-50" href="#">
        <YouTube size={30} />
      </Link>
    </div>
  );
};
export default Socials;
