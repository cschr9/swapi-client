import React from "react";
import SearchBar from "@/components/search-bar";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PEOPLE_URL } from "@/lib/swapi";

const SearchInterface = async () => {
  const count = await fetch(PEOPLE_URL).then((res) => {
    return res
      .json()
      .then((data) => {
        return data.count;
      })
      .catch((err) => {
        console.error(err);
        return Math.floor(Math.random() * 10) + 1;
      });
  });
  return (
    <div className="relative flex min-h-[520px] w-full max-w-4xl flex-col items-center space-y-8">
      <SearchBar />
      <div className="flex space-x-2">
        <Link
          className={buttonVariants({ variant: "default", size: "lg" })}
          href={`/profile/${Math.floor(Math.random() * count) + 1}`}
        >
          Möge der Zufall mit dir sein!
        </Link>
      </div>
    </div>
  );
};

export default SearchInterface;
