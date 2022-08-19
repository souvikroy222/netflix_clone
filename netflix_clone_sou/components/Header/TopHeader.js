import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineSearch, HiBell } from "react-icons/hi";
import Link from "next/link";

function Header() {
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-black"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="images/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerlink">Home</li>
          <li className="headerlink">TV Shows</li>
          <li className="headerlink">Movies</li>
          <li className="headerlink">New & Popular</li>
          <li className="headerlink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm">
        <HiOutlineSearch className="hiinline h-6 w-6 text-white" />
        <p className="hidden lg:inline text-white">Kids</p>
        <HiBell className="h-6 w-6 text-white" />
        <Link href="/account">
          <img
            src="images/user.png"
            alt="account logo"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
