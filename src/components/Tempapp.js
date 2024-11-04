import React, { useEffect, useState } from 'react';
// import "./css/Style.css";  

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "d556a14c897ba8ee0973668323a8fc12";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resJson = await response.json();
        setCity(resJson.main);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchApi();
  }, [search]);

  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input
            type='search'
            value={search}
            className='inputField'
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className='errorMsg'> No Data Found </p>
        ) : (
          <div>
            <div className='info'>
              <h2 className='location'>
                <i className="fa-solid fa-street-view" aria-hidden="true"></i> {search}
              </h2>
              <h1 className='temp'> {city.temp} cel </h1>
              <h3 className='tempmin_max'> Min: {city.temp_min} | Max: {city.temp_max}</h3>
            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tempapp;