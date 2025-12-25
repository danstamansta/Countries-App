import { useFetchDetails } from "../../Hooks/useFetchDetails";
import { useParams } from "react-router-dom";
import CountryInfo from "../../blocks/CountryInfo/CountryInfo";

export default function CountryDetails() {
  const { countryCode } = useParams();
  const { country, error, isLoading } = useFetchDetails(countryCode);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;

  return <CountryInfo country={country} />;
}
