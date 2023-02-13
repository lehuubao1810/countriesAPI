import { useRef } from "react";

function SearchBox(props) {

    const input = useRef();
    const handleSearch = () => {
        props.setLoading(true);
        if (input.current.value === "") {
            fetch("https://restcountries.com/v3.1/all")
                .then((res) => res.json())
                .then((data) => {
                    props.setCountries(data);
                    props.setLoading(false);
                });
            return;
        }
        fetch(`https://restcountries.com/v3.1/name/${input.current.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 404) {
                    props.setCountries([]);
                    props.setLoading(false);
                    return;
                }
                props.setCountries(data);
                props.setLoading(false);
            });
    };

    
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };


    return (
        <div className="search-box">
            <button className="searchBtn" onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
                type="text"
                placeholder="Search for a country..."
                ref={input}
            />
        </div>
    )
}

export default SearchBox