import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import DetailedWeatherCard from './DetailedWeatherCard';
import './styles/Dashboard.css';
import weatherAppIcon from '../assets/weather-app-icon.png';
import { useAuth0 } from '@auth0/auth0-react';

// Cloud images
import cloudYellow from '../assets/cloud-yellow.png';
import cloudBlue from '../assets/cloud-blue.png';
import cloudRed from '../assets/cloud-red.png';
import cloudGreen from '../assets/cloud-green.png';
import cloudPurple from '../assets/cloud-purple.png'; // If you have this

function Dashboard() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  const [loading, setLoading] = useState(true);

  const cloudImages = [cloudYellow, cloudBlue, cloudRed, cloudGreen, cloudPurple];

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }

    getAccessTokenSilently()
      .then(token => {
        return axios.get('http://localhost:9000/weather', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then(res => {
        const enriched = res.data.map((weather, index) => ({
          ...weather,
          cloudImage: cloudImages[index % cloudImages.length], // Rotate images
        }));
        setWeatherData(enriched);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [isAuthenticated, loginWithRedirect, getAccessTokenSilently, isLoading]);

  if (isLoading) return <p>Loading weather Data...</p>;

  return (
    <div className="dashboard-container">
      <div className="app-heading">
        <img src={weatherAppIcon} alt="" />
        <h1 className="heading">Weather App</h1>
        <button className="btnLogout" onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>

      {selectedWeather ? (
        <DetailedWeatherCard
          {...selectedWeather}
          onBack={() => setSelectedWeather(null)}
        />
      ) : (
        <div className="weather-cards-container">
          {loading ? (
            <p>Loading weather data...</p>
          ) : (
            weatherData.map((weather, index) => (
              <WeatherCard
                key={index}
                className="card"
                city={weather.cityName}
                country={weather.country}
                temperature={weather.temperature}
                minTemp={weather.minTemp}
                maxTemp={weather.maxTemp}
                description={weather.weatherDescription}
                pressure={weather.pressure}
                humidity={weather.humidity}
                windSpeed={weather.windSpeed}
                windDeg={weather.windDeg}
                visibility={weather.visibility}
                sunrise={weather.sunrise}
                sunset={weather.sunset}
                latitude={weather.latitude}
                longitude={weather.longitude}
                cloudImage={weather.cloudImage}
                onClick={() => setSelectedWeather(weather)} // ✨ handle click
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
