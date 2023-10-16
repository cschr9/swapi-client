import SearchInterface from "@/components/search-interface";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-8">
      <p className="text-5xl text-white">
        Find your favourite Starwars Character
      </p>
      <SearchInterface />
    </main>
  );
}
