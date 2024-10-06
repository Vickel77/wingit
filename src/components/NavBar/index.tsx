import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="absolute flex gap-6 self-start mt-8 ml-14">
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
    </nav>
  );
}
