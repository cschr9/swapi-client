"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import SearchResults from "@/components/search-results";
import { useCharacterSearch } from "@/hooks/useCharacterSearch";

const SearchBar = () => {
  const { searchResults, isLoadingResults, searchQuery, setSearchQuery } =
    useCharacterSearch();

  return (
    <div className="w-full rounded-3xl bg-black bg-opacity-10">
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="max-w-5xl rounded-3xl border-0 bg-transparent p-6 text-lg text-white/75 focus:text-white/100 focus:ring-0 focus-visible:shadow-xl focus-visible:ring-0 focus-visible:ring-white/50 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
      />
      {searchQuery && (
        <>
          {isLoadingResults}
          <SearchResults results={searchResults} isLoading={isLoadingResults} />
        </>
      )}
    </div>
  );
};

export default SearchBar;
