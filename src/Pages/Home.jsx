import { useFetchCountries } from "../Hooks/useFetchCountries";
import CountryCard from "../components/CountryCard";


export default function Home(){

    const {countries,isLoading,error} = useFetchCountries();
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>error</h1>
    return (
        <div className="countries-grid">
            {countries.map((country) =>
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
    );
}