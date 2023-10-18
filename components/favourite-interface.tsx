"use client";
import Link from "next/link";
import React from "react";

import { getIdFromUrl } from "@/lib/swapi";
import { useFavourites } from "@/store/favourite-context";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const FavouriteInterface = () => {
  const { favourites, removeAllFavourites } = useFavourites();

  return (
    <div className="flex flex-col items-center space-y-4 py-8 text-center">
      <h2 className="text-xl text-muted-foreground">your current favourites</h2>
      <div
        className="flex w-full flex-wrap justify-center gap-4 rounded-3xl"
        suppressHydrationWarning
      >
        {favourites.length > 0
          ? favourites.map((fav) => {
              return (
                <Link
                  key={fav.name}
                  href={`/profile/${getIdFromUrl(fav.url)}`}
                  className="rounded-3xl bg-neutral-900 px-4 py-2 text-muted-foreground hover:text-white"
                >
                  {fav.name}
                </Link>
              );
            })
          : null}
      </div>
      <Button className="self-auto" onClick={removeAllFavourites}>
        <Trash2 className="mr-2 h-4 w-4" /> Remove All
      </Button>
    </div>
  );
};

export default FavouriteInterface;
