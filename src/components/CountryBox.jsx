import { useNavigate } from "react-router-dom";

function CountryBox(props) {
    const navigate = useNavigate();
    const handleCountryDetail = () => {
        const nameCountry = props.name;
        console.log(nameCountry);
        navigate(`/country/${nameCountry}`);
      }
    return (
        <div className="country-box" onClick={handleCountryDetail}>
            <img src={props.flag} alt={props.alt} />
            <div className="country-info">
                <h4> {props.name} </h4>
                <p> <span>Population:</span>   {props.population} </p>
                <p> <span>Region:</span>   {props.region} </p>
                <p> <span>Capital:</span>   {props.capital} </p>
            </div>
        </div>
    )
}

export default CountryBox