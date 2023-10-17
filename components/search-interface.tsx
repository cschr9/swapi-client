import React from "react";
import SearchBar from "@/components/search-bar";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PEOPLE_URL } from "@/lib/swapi";
import axios from "axios";

type SearchInterfaceProps = {
  hideRandomButton?: boolean;
};

const fetchRandomMax = async () => {
  try {
    const count = await axios.get(PEOPLE_URL).then((res) => {
      return res.data.count;
    });
    return count;
  } catch (error) {
    throw new Error("Error fetching random max count");
  }
};

const SearchInterface = async ({ hideRandomButton }: SearchInterfaceProps) => {
  let count: number = 0;
  if (!hideRandomButton) {
    count = await fetchRandomMax();
  }

  return (
    <div className="relative flex w-full max-w-4xl flex-col items-center space-y-8">
      <SearchBar />
      <div className="flex space-x-2">
        {!hideRandomButton && (
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href={`/profile/${Math.floor(Math.random() * count) + 1}`}
          >
            Möge der Zufall mit dir sein
          </Link>
        )}
      </div>
    </div>
  );
};

export default SearchInterface;
