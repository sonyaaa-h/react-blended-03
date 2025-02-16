import { Link } from "react-router-dom";
import GridItem from "../GridItem/GridItem";

const CountryList = ({ countries }) => {
  return <ul>
    { countries.map(country => {
    return (
      <GridItem key={country.id}>
      <Link to={`/country/${country.id}`}>
        <img src={country.flag} alt={country.country} />
      </Link>
    </GridItem>
    )
  })}
  </ul>
};
export default CountryList;
