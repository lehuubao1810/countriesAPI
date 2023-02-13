fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
.then((res) => res.json())
.then((data) => {
    setCountryCode(Object.keys(data[0])[0]);
    setCountry(data); 
    
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
    
    setLoading(false); 
});

// Object.keys(data[0])[0]