
import { useFetchCountries } from "../../Hooks/useFetchCountries";
import { useFilterCountries } from "../../Hooks/useFilterCountries";
import CountryCard from "../../components/CountryCard/CountryCard";
import Input from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import './Home.css';

export default function Home(){

	const {countries ,isLoading,error} = useFetchCountries();
	const {search,setSearch,region,setRegion,filteredCountries} = useFilterCountries(countries);

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>error</h1>
   
    return (
    <div>
      <div className="filter-and-search">
        <Input 
          value={search} 
          onChange={setSearch} 
        />
        
        <Select 
          value={region} 
          onChange={setRegion} 
        />
        </div>
        <div className="countries-grid">
            {filteredCountries.map((country) =>
            <CountryCard
                key={country.cca3}
                name={country.name.common}
                flag={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                code={country.cca3}
            />
            )}
        </div>
    </div>
    );
}