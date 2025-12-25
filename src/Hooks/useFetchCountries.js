import { useQuery } from "@tanstack/react-query";

const base_url =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3";

async function fetchAllCountries() {
  const response = await fetch(base_url);
  if (!response.ok) {
    throw new Error("could not fetch");
  }
  return response.json();
}

export function useFetchCountries() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchAllCountries,
    staleTime: 1000 * 60 * 5, //5minutes
  });

  return {
    countries: data || [],
    isLoading,
    error,
  };
}
