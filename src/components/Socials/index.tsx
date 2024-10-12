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
        <Twitter width="25px" className="bg-white" />
      </Link>
      <Link className="hover:opacity-50" href="#">
        <Instagram width="25px" />
      </Link>
      <Link className="hover:opacity-50" href="#">
        <Facebook width="25px" />
      </Link>
      <Link className="hover:opacity-50" href="#">
        <YouTube width="25px" />
      </Link>
    </div>
  );
};
export default Socials;
