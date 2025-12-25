import { Link } from "react-router-dom";
import "./CountryInfo.css";

export default function CountryInfo({ country }) {
  const {
    name,
    flags,
    population,
    region,
    subregion,
    tld,
    currencies,
    languages,
    capital,
  } = country;

  return (
    <div className="country-details-page">
      <Link to="/" className="back-button">
        Back
      </Link>

      <div className="details-container">
        <img className="country-info-image" src={flags.png} alt={name.common} />

        <div className="details-text">
          <h1>{name.common}</h1>

          <div className="details-grid">
            <p>
              <strong>Native Name: </strong>
              {Object.values(name.nativeName || {})[0]?.common}
            </p>
            <p>
              <strong>Population </strong>: {population.toLocaleString()}
            </p>
            <p>
              <strong>Region: </strong> {region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {subregion}
            </p>
            <p>
              <strong>Capital: </strong> {capital}
            </p>
            <p>
              <strong>Top Level Domain: </strong>
              {tld?.[0]}
            </p>

            <p>
              <strong>Currencies: </strong>
              {Object.values(currencies || {})
                .map((c) => c.name)
                .join(", ")}
            </p>

            <p>
              <strong>Languages: </strong>{" "}
              {Object.values(languages || {}).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
