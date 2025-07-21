import './styles/DetailedWeatherCard.css';

function DetailedWeatherCard(props) {
  const kelvinToCelsius = (k) => (k - 273.15).toFixed(1);
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="detailed-card">
        <div
          className="card-header"
          style={{
            backgroundImage: `url(${props.cloudImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
          }}
        >
          <button className="close-btn" onClick={props.onBack}>×</button>
          <h2>{props.cityName}, {props.country}</h2>
          <p>{new Date().toLocaleString()}</p>
          <p className="desc">{props.description}</p>
          <h1>{kelvinToCelsius(props.temperature)}°C</h1>
        </div>

        <div className="card-body">
          <div className="col">
            <p><strong>Min:</strong> {kelvinToCelsius(props.minTemp)}°C</p>
            <p><strong>Max:</strong> {kelvinToCelsius(props.maxTemp)}°C</p>
            <p><strong>Pressure:</strong> {props.pressure} hPa</p>
          </div>
          <div className="col">
            <p><strong>Humidity:</strong> {props.humidity}%</p>
            <p><strong>Visibility:</strong> {(props.visibility / 1000).toFixed(1)} km</p>
            <p><strong>Wind:</strong> {props.windSpeed} m/s {props.windDeg}°</p>
          </div>
          <div className="col">
            <p><strong>Sunrise:</strong> {formatTime(props.sunrise)}</p>
            <p><strong>Sunset:</strong> {formatTime(props.sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedWeatherCard;
