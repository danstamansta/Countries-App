import { useState } from "react";
export function useFilterCountries(rawCountries = []) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = rawCountries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion = region === "" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  return {
    search,
    setSearch,
    region,
    setRegion,
    filteredCountries,
  };
}
