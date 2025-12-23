import { Link } from "react-router-dom";
import './CountryInfo.css'

export default function CountryInfo({ country }) {

  return (
    <div className="country-details-page">
      <Link to="/" className="back-button">Back</Link>

      <div className="details-container">
        <img className= "country-info-image" src={country.flags.png} alt={country.name.common} />

        <div className="details-text">
          <h1>{country.name.common}</h1>

          <div className="details-grid">
            <p><strong>Native Name: </strong>{Object.values(country.name.nativeName || {})[0]?.common}</p>
            <p><strong>Population </strong>: {country.population.toLocaleString()}</p>
            <p><strong>Region: </strong> {country.region}</p>
            <p><strong>Sub Region: </strong>{country.subregion}</p>
            <p><strong>Capital: </strong> {country.capital}</p>
            <p><strong>Top Level Domain: </strong>{country.tld?.[0]}</p>
            
            <p><strong>Currencies: </strong>{Object.values(country.currencies || {})
                .map(c => c.name)
                .join(", ")}
            </p>

            <p><strong>Languages: </strong> {Object.values(country.languages || {})
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}