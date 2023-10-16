import React from "react";
import Image from "next/image";

const ProfilePage = async ({ params }: { params: { personId: string } }) => {
  const { personId } = params;

  const person: PersonDTO = await fetch(
    `https://swapi.dev/api/people/${personId}`,
  ).then((res) => {
    return res.json();
  });

  console.log(person);

  return (
    <div>
      <div>
        <Image alt={person.name} src={placeholder.svg} />
      </div>
      <div className="flex w-full flex-col">
        <h2 className="text-5xl text-white">{person.name}</h2>
        <div className="flex space-x-2">
          <InfoPill label="Height" value={person.height} />
          <InfoPill label="Gender" value={person.gender} />
          <InfoPill label="Birth Year" value={person.birth_year} />
        </div>
      </div>
    </div>
  );
};

const InfoPill = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-start space-y-0 rounded-lg bg-black/25 p-2">
      <p className="text-xs text-white/50">{label}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  );
};

export default ProfilePage;
