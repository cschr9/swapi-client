import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { getIdFromUrl } from "@/lib/swapi";
import { useFavourites } from "@/store/favourite-context";
import { Star } from "lucide-react";

type Props = {
  results: PersonDTO[];
  className?: string;
  isLoading?: boolean;
};

const SearchResults = ({ results, className, isLoading }: Props) => {
  const SKELETON_COUNT = 5;

  const { isFavourite } = useFavourites();

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
                className="flex w-full items-center justify-between space-x-4 rounded-3xl p-2 hover:bg-black/10"
                href={`/profile/${getIdFromUrl(result.url)}`}
                key={result.name}
              >
                <p className="text-white">{result.name}</p>
                {isFavourite(result.name) && (
                  <span className="text-yellow-400">
                    <Star />
                  </span>
                )}
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
        <Skeleton
          key={`skeleton-${i}`}
          className="my-2 h-[24px] rounded-full"
          style={{ width: `${100 + Math.floor(i * Math.random()) * 50}px` }}
        />
      ))}
    </>
  );
};

export default SearchResults;
