import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Map from "./components/Map";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState({
    ip: "Loading...",
    location: { country: "", region: "", city: "", timezone: "", lat: 0, lng: 0 },
  });

  const fetchData = async (ip = "8.8.8.8") => {
    try {
      
      const apiKey = import.meta.env.API_KEY;
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
      const res = await fetch(url);
      const result = await res.json();

      setData({
        ip: result.ip,
        location: {
          country: result.location.country,
          region: result.location.region,
          city: result.location.city,
          timezone: result.location.timezone,
          lat: result.location.lat,
          lng: result.location.lng,
        },
      });
    } catch (error) {
      console.error("Error Fetching IP Address", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header onSearch={fetchData} />
      <Cards data={data} />
      <Map lat={data.location.lat} lng={data.location.lng} />
    </div>
  );
};

export default App;
