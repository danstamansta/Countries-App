
import { useFetchCountries } from "../../Hooks/useFetchCountries";
import { useFilterCountries } from "../../Hooks/useFilterCountries";
import CountryCard from "../../components/CountryCard/CountryCard";
import './Home.css';

export default function Home(){

	const {countries ,isLoading,error} = useFetchCountries();

		const {search,setSearch,region,setRegion,filteredCountries} = useFilterCountries(countries);

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>error</h1>
   
    
    return (
      	<div> 
        	<div>
            <input
            type="text"
            placeholder="search.."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

            <select
                value={region}
                onChange={(e)=>setRegion(e.target.value)}
            >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Oceania</option>
                <option value="Oceania">Oceania</option>
            </select>

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