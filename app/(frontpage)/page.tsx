import Image from "next/image";
import SearchInterface from "@/components/search-interface";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-8">
      <Image
        src="/assets/cs-logo.svg"
        width={160}
        height={160}
        alt="Christian Schröder"
      />
      <p className="text-wrap-balance text-center text-5xl text-white">
        Find your favourite Starwars Character
      </p>
      <SearchInterface />
    </main>
  );
}
