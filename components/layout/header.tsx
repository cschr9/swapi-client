import React from "react";
import Image from "next/image";
import SearchInterface from "../search-interface";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between">
      <div>
        <Link href="/">
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
