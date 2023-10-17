import React from "react";
import { formatDate } from "@/lib/swapi";
import axios from "axios";

type Props = {
  filmUrl: string;
};

const fetchFilmData = async (filmUrl: string) => {
  try {
    const res = await axios.get(filmUrl);
    const data: FilmDTO = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

const FilmItem = async (props: Props) => {
  const film: FilmDTO | undefined = await fetchFilmData(props.filmUrl);

  if (!film) return <div>Film not found</div>;
  return (
    <li key={film.title} className="flex space-x-4 text-white ">
      <span className="text-muted-foreground">
        {formatDate(film.release_date)}
      </span>
      <span>{film.title}</span>
    </li>
  );
};

export default FilmItem;
