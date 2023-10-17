import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { PEOPLE_URL } from "@/lib/swapi";
import axios from "axios";

export function useCharacterSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<PersonDTO[]>([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoadingResults(true)
    const fetchSearchResults = async () => {
      setErrorMessage("");
      try {
        const response = await axios.get(`${PEOPLE_URL}/?search=${debouncedSearchQuery}`, {
          signal: controller.signal,
        });

        setSearchResults(response.data.results);
      } catch (err:unknown) {
        if(err instanceof Error){
          setErrorMessage(`An error occurred while fetching results: ${err.message}`);
            console.error(err);  
        } 
      } finally {
        setIsLoadingResults(false);
      }
    };

    if (debouncedSearchQuery.length > 0) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }

    return () => controller.abort();
  }, [debouncedSearchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoadingResults,
    errorMessage,
  };
}
