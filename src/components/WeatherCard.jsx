import './styles/WeatherCard.css';
import navigation from '../assets/navigation.png';

function WeatherCard(props) {
  const kelvinToCelsius = (k) => (k - 273.15).toFixed(1);

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className={props.className} onClick={props.onClick}>
      <div
        className="top-view"
        style={{
          backgroundImage: `url(${props.cloudImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff',
        }}
      >
        <div className="t-left-pane">
          <h4 className="city-name">{props.city}, {props.country}</h4>
          <p className="date-time">{new Date().toLocaleString()}</p>
          <div className="status-wrapper">
            {props.icon && (
              <img src={props.icon} alt="weather icon" className="cloud-icon" />
            )}
            <p className="temp-status">{props.description}</p>
          </div>
        </div>

        <div className="t-right-pane">
          <p className="temperature">{kelvinToCelsius(props.temperature)}&deg;C</p>
          <p className="min-temp">Temp Min: {kelvinToCelsius(props.minTemp)}&deg;C</p>
          <p className="max-temp">Temp Max: {kelvinToCelsius(props.maxTemp)}&deg;C</p>
        </div>
      </div>

      <div className="bottom-view">
        <div className="b-left-pane">
          <p className="pressure-level">Pressure: {props.pressure} hPa</p>
          <p className="humidity-level">Humidity: {props.humidity}%</p>
          <p className="visibility-level">Visibility: {(props.visibility / 1000).toFixed(1)} km</p>
        </div>

        <hr />

        <div className="b-middle-pane">
          <img src={navigation} alt="navigation" className="navigation" />
          <p className="speed">{props.windSpeed} m/s {props.windDeg}&deg;</p>
        </div>

        <hr />

        <div className="b-right-pane">
          <p className="sunrise">Sunrise: {formatTime(props.sunrise)}</p>
          <p className="sunset">Sunset: {formatTime(props.sunset)}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
