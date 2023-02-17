import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoadingDetail from "../components/LoadingDetail";

function CountryDetail() {

    const nameCountry = useParams().countryName;
    const navigate = useNavigate();

    const [country, setCountry] = useState([]);
    const [borderCountries, setBorderCountries] = useState([]);
    const [countryCode, setCountryCode] = useState([]);
    const [countryCurrency, setCountryCurrency] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data);
                setCountryCode(Object.keys(data[0].name.nativeName)[0]);
                setCountryCurrency(Object.keys(data[0].currencies)[0]);
                if (Object.keys(data[0]).includes("borders") === false) {
                    setBorderCountries(["No border countries"]);
                }
                else {
                    const sub_borderCountries = [...data[0].borders];
                    sub_borderCountries.map((borderCountry) => {
                        fetch(`https://restcountries.com/v3.1/alpha/${borderCountry}`)
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data[0].name.common);
                                setBorderCountries((prev) => [...prev, data[0].name.common]);
                                console.log(borderCountries);
                            });
                    });
                }

                setLoading(false);
            });
    }, []);

    const handleBorderCountry = (e) => {
        const nameCountry = e.target.value;
        console.log(nameCountry);
        navigate(`/country/${nameCountry}`);
        setLoading(true);
        fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data);
                setCountryCode(Object.keys(data[0].name.nativeName)[0]);
                setCountryCurrency(Object.keys(data[0].currencies)[0]);
                if (Object.keys(data[0]).includes("borders") === false) {
                    setBorderCountries(["No border countries"]);
                }
                else {
                    setBorderCountries([]);
                    const sub_borderCountries = [...data[0].borders];
                    sub_borderCountries.map((borderCountry) => {
                        fetch(`https://restcountries.com/v3.1/alpha/${borderCountry}`)
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data[0].name.common);
                                setBorderCountries((prev) => [...prev, data[0].name.common]);
                                console.log(borderCountries);
                            });
                    });
                }

                setLoading(false);
            });
    }

    return (
        <>
            <header>
                <Nav />
            </header>

            <section>
                <Link to="/" className="btnBack">
                    <i className="fa-solid fa-arrow-left-long"></i>
                    Back
                </Link>
                {loading ?
                    <LoadingDetail />
                    :
                    <div className="countryDetail">
                        <img src={country[0].flags.png} alt="" />
                        <div className="countryDetailInfo">
                            <h1>{country[0].name.common}</h1>
                            <div className="countryDetailInfoList">
                                <div className="countryDetailInfoListCol1">
                                    <p><span>Native Name: </span> {country[0].name.nativeName[countryCode].official} </p>
                                    <p><span>Population: </span> {country[0].population} </p>
                                    <p><span>Region: </span> {country[0].region} </p>
                                    <p><span>Sub Region: </span> {country[0].subregion} </p>
                                    <p><span>Capital: </span> {country[0].capital} </p>
                                </div>
                                <div className="countryDetailInfoListCol2">
                                    <p><span>Top Level Domain: </span> {country[0].tld} </p>
                                    <p><span>Currencies: </span> {country[0].currencies[countryCurrency].name} </p>
                                    <p><span>Languages: </span> {country[0].languages[countryCode]} </p>
                                </div>
                            </div>
                            <div className="borderCountries">
                                <span>Border countries: </span>
                                {
                                    borderCountries[0] === "No border countries" ?
                                        <span>No border countries</span>
                                        :
                                        borderCountries.map((borderCountry, index) => (
                                            <button
                                                key={index}
                                                className="btnBorderCountry"
                                                value={borderCountry}
                                                onClick={handleBorderCountry}
                                            >
                                                {borderCountry}
                                            </button>
                                        ))}
                            </div>
                        </div>
                    </div>
                }
            </section>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default CountryDetail