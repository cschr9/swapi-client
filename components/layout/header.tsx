import React from "react";
import Image from "next/image";
import SearchInterface from "../search-interface";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col justify-between space-y-8 sm:flex-row sm:space-y-0">
      <div>
        <Link href="/" aria-label="Home">
          <Image
            src="/assets/cs-logo.svg"
            width={80}
            height={80}
            alt="Christian Schröder SWAPI"
          />
        </Link>
      </div>
      <div>
        <SearchInterface hideRandomButton />
      </div>
    </header>
  );
};

export default Header;
