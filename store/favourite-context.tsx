"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Typen für die Favoriten
type Favourite = PersonDTO;

// Typen für den Context
type FavouriteContextType = {
  favourites: Favourite[];
  addFavourite: (favourite: Favourite) => void;
  removeFavourite: (name: string) => void;
  isFavourite: (name: string) => boolean;
  removeAllFavourites: () => void;
};

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined,
);

export const useFavourites = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useFavourites must be used within a FavouriteProvider");
  }
  return context;
};

export const FavouriteProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const [favourites, setFavourites] = useState<Favourite[]>(() => {
    if (typeof localStorage !== "undefined") {
      const storedFavourites = localStorage.getItem("swapiFavourites");
      return storedFavourites ? JSON.parse(storedFavourites) : [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Speichere die Favoriten im localStorage, wenn sich der State ändert
    localStorage.setItem("swapiFavourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (favourite: Favourite) => {
    //only add if not already in favourites
    if (isFavourite(favourite.name)) {
      return;
    }
    setFavourites((prevFavourites) => [...prevFavourites, favourite]);
  };

  const removeFavourite = (name: string) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((fav) => fav.name !== name),
    );
  };

  const removeAllFavourites = () => {
    setFavourites([]);
  };

  const isFavourite = (name: string) => {
    return favourites.some((fav) => fav.name === name);
  };

  if (!isMounted) return null;

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
        removeAllFavourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
