import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
        try {
          const countries = await getCountries();
          setCountries(countries);
        }catch (error) {
          console.log(error);
        }
    };

    getData();
  }, []);

  console.log(countries);
  

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default Home;
