import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { getIdFromUrl } from "@/lib/swapi";

type Props = {
  results: PersonDTO[];
  className?: string;
  isLoading?: boolean;
};

const SearchResults = ({ results, className, isLoading }: Props) => {
  const SKELETON_COUNT = 5;
  //get the id from the url attribute "https://swapi.dev/api/people/1/"

  return (
    <div
      className={cn(
        className,
        "flex w-full max-w-3xl flex-col rounded-3xl px-4 py-4",
      )}
    >
      {isLoading ? (
        <SearchResultSkeleton count={SKELETON_COUNT} />
      ) : (
        <>
          {results.length === 0 ? (
            <p className="text-white/50">No results found</p>
          ) : (
            results.map((result) => (
              <Link
                className="flex w-full items-center space-x-4 rounded-3xl p-2 hover:bg-black/10"
                href={`/profile/${getIdFromUrl(result.url)}`}
                key={result.name}
              >
                <p className="text-white">{result.name}</p>
              </Link>
            ))
          )}
        </>
      )}
    </div>
  );
};

const SearchResultSkeleton = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          className="my-2 flex w-full items-center space-x-4"
          key={`skeleton-${i}`}
        >
          <Skeleton className="h-[24px] w-[140px] rounded-full" />
          <Skeleton className="h-[24px] w-[60px] rounded-full" />
        </div>
      ))}
    </>
  );
};

export default SearchResults;
