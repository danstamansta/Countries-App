import {Link} from 'react-router-dom';
import './CountryCard.css';

export default function CountryCard({name,flag,capital,population,region,code}){
	return(
   <Link to={`/country/${code}`} className="country-card-link">
      <div className="country-card">
        <div className="flag-container">
          <img className = "flag-image" src={flag} alt={`${name} flag`} />
        </div>

        <div className="card-info">
          <h3>{name}</h3>
          <p><strong>Population:</strong> {population.toLocaleString()}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Capital:</strong> {capital?.[0] || "N/A"}</p>
        </div>
      </div>
    </Link>
  );
}