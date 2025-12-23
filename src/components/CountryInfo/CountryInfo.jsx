import { Link } from "react-router-dom";

export default function CountryInfo({ country }) {

  return (
    <div className="country-details-page">
      <Link to="/" className="back-button">Back</Link>

      <div className="details-container">
        <img src={country.flags.png} alt={country.name.common} />

        <div className="details-text">
          <h1>{country.name.common}</h1>

          <div className="details-grid">
            <p>Native Name: {Object.values(country.name.nativeName || {})[0]?.common}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
            <p>Top Level Domain: {country.tld?.[0]}</p>
            
            <p>Currencies: {Object.values(country.currencies || {})
                .map(c => c.name)
                .join(", ")}
            </p>

            <p>Languages: {Object.values(country.languages || {})
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}