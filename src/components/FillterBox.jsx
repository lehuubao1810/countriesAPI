import { useState,useEffect } from "react"

function FillterBox(props) {

    const [region, setRegion] = useState("fillter");

    useEffect(() => {
        props.setLoading(true);
        if (region === "fillter") {
            fetch("https://restcountries.com/v3.1/all")
                .then((res) => res.json())
                .then((data) => {
                    props.setCountries(data);
                    props.setLoading(false);
                });
            return;
        }
        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then((res) => res.json())
            .then((data) => {
                props.setCountries(data);
                props.setLoading(false);
            });
    }, [region]);

    return (
        <div className="fillter-box">
            <select
                name="fillter"
                id="fillter"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
            >
                <option value="fillter">Fillter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FillterBox