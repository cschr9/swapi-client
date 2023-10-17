"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { BASE_URL } from "@/lib/swapi";
import axios from "axios";
import SearchResults from "@/components/search-results";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  useEffect(() => {
    const controller = new AbortController();
    const searchResults = async () => {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}/people/?search=${debouncedSearchQuery}`, {
          signal: controller.signal,
        })
        .then((res) => {
          setSearchResults(res.data.results);
          return res.data;
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    };
    if (debouncedSearchQuery.length > 0) {
      searchResults();
    } else {
      setSearchResults([]);
    }
    return () => controller.abort();
  }, [debouncedSearchQuery]);

  return (
    <div className="w-full rounded-3xl bg-black bg-opacity-10">
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="max-w-5xl rounded-3xl border-0 bg-transparent p-6 text-lg text-white/75 focus:text-white/100 focus:ring-0 focus-visible:shadow-xl focus-visible:ring-0 focus-visible:ring-white/50 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
      />
      {debouncedSearchQuery && (
        <SearchResults results={searchResults} isLoading={isLoading} />
      )}
    </div>
  );
};

export default SearchBar;
