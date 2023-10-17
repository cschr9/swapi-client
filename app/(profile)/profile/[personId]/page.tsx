import React, { Suspense } from "react";
import Image from "next/image";
import axios from "axios";

import FilmItem from "@/components/film-item";
import { ProfileInfoPill } from "@/components/profile-info-pill";

import { Skeleton } from "@/components/ui/skeleton";

import { PEOPLE_URL, formatDate } from "@/lib/swapi";
import WithSuspense from "@/components/withSuspense";

const fetchPersonData = async (personId: string) => {
  try {
    const person: PersonDTO = await axios
      .get(`${PEOPLE_URL}/${personId}`)
      .then((res) => {
        return res.data;
      });
    return person;
  } catch (error) {
    console.error(error);
    throw new Error("Person not found");
  }
};

const FilmItemWithSuspense = WithSuspense(FilmItem, {
  SkeletonComponent: (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-[20px] w-[72px]" />
      <Skeleton className="h-[20px] w-[280px]" />
    </div>
  ),
});

const ProfilePage = async ({
  params: { personId },
}: {
  params: { personId: string };
}) => {
  const person: PersonDTO | undefined = await fetchPersonData(personId);

  if (!person) {
    return <div>Error: Person not found</div>;
  }

  const {
    height,
    gender,
    birth_year,
    species,
    homeworld,
    edited,
    films,
    name,
  } = person;

  return (
    <main className="flex space-x-8 rounded-3xl bg-black/25 p-16">
      <div className="space-y-4">
        <Image
          alt={name}
          src={"/assets/placeholder.webp"}
          width={277}
          height={280}
        />
        <div className="flex flex-wrap gap-2">
          <ProfileInfoPill label="Height" value={`${height} cm`} />
          <ProfileInfoPill label="Gender" value={gender} />
          <ProfileInfoPill label="Birth Year" value={birth_year} />
          <ProfileInfoPill label="Species" requestUrlArray={species} />
          <ProfileInfoPill
            label="Homeworld"
            requestUrlArray={Array(1).fill(homeworld)}
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div>
          <div className="border-b border-neutral-900 py-4">
            <h2 className="text-5xl text-white">{name}</h2>
            <span className="text-sm text-muted-foreground">
              Last Update: {formatDate(edited)}
            </span>
          </div>
          <div className="border-b border-neutral-900 py-4">
            <h2 className="mb-2 text-3xl text-white">Films</h2>
            <ul className="space-y-2">
              {films.map((filmUrl) => (
                <Suspense
                  key={filmUrl}
                  fallback={
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-[20px] w-[72px]" />
                      <Skeleton className="h-[20px] w-[280px]" />
                    </div>
                  }
                >
                  <FilmItemWithSuspense filmUrl={filmUrl} />
                </Suspense>
              ))}
            </ul>
          </div>
          <div className="py-4 text-xs text-white/50">
            rest of the data could be here...
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
