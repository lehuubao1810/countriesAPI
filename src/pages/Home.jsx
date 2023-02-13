import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FillterBox from "../components/FillterBox";
import CountryBox from "../components/CountryBox";
import SearchBox from "../components/SearchBox";
import LoadingList from "../components/LoadingList";
import { useState, useEffect } from "react";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res)=> res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
    }, []);


  return (
    <>
      <header>
        <Nav />
      </header>

      <section>
        <div className="tools">
          <SearchBox 
            setCountries={setCountries}
            setLoading={setLoading}
          />
          <FillterBox 
            setCountries={setCountries}
            setLoading={setLoading}
          />
        </div>
        {loading ? <LoadingList /> : null}
        <div className="CountriesList" >
          {countries.map((country) => (
            <CountryBox
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
              alt={country.flags.alt}
            />
          ))}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>

    </>
  );
}

export default HomePage;