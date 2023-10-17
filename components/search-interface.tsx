import React from "react";
import SearchBar from "@/components/search-bar";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PEOPLE_URL } from "@/lib/swapi";
import axios from "axios";
import { cn } from "@/lib/utils";

type SearchInterfaceProps = {
  hideRandomButton?: boolean;
};

const fetchRandomMax = async () => {
  try {
    const count = (await axios.get(PEOPLE_URL))?.data?.count;
    return count;
  } catch (error: unknown) {
    if (error instanceof Error)
      throw new Error(`Error fetching random max count: ${error.message}`);
  }
};

const SearchInterface = async ({ hideRandomButton }: SearchInterfaceProps) => {
  let count: number = 0;
  if (!hideRandomButton) {
    count = await fetchRandomMax();
  }

  const randomPersonId = Math.floor(Math.random() * count) + 1;

  return (
    <div className="relative flex w-full max-w-4xl flex-col items-center space-y-8">
      <SearchBar />
      <div className="flex flex-col items-center space-y-4">
        {!hideRandomButton && (
          <>
            <span className="text-muted-foreground">-oder-</span>
            <Link
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-3xl  bg-black/50 p-4 text-white hover:bg-black/75",
              )}
              href={`/profile/${randomPersonId}`}
            >
              Möge der Zufall mit dir sein
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchInterface;
