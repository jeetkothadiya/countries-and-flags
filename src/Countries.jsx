import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries() {
  const ApiEndpoint = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch(ApiEndpoint)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {countries.map(({abbr, flag, name}) => (
        <CountryCard key={abbr} flag={flag} name={name} />
      ))}
    </div>
  );
}

export default Countries;
