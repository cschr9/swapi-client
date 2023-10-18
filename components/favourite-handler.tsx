"use client";
import { useFavourites } from "@/store/favourite-context";
import React from "react";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type Props = {
  character: PersonDTO;
};

const FavouriteHandler = ({ character }: Props) => {
  const { isFavourite, addFavourite, removeFavourite } = useFavourites();

  const handleClick = () => {
    if (isFavourite(character.name)) {
      removeFavourite(character.name);
    } else {
      addFavourite(character);
    }
  };

  return (
    <Button
      onClick={handleClick}
      size={"lg"}
      className={
        isFavourite(character.name)
          ? "text-yellow-400"
          : "text-muted-foreground"
      }
    >
      <Star width={32} height={32} />
    </Button>
  );
};

export default FavouriteHandler;
