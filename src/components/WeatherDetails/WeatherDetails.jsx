import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {
  getMinTemps,
  getMaxTemps,
  getDates,
  getHumidities,
  getPrecips,
  getIcons,
  getDescriptions,
  getConditions,
} from '../../redux/weatherData/weatherDataSlice';

const WeatherDetails = () => {
  const minTemps = useSelector(getMinTemps);
  const maxTemps = useSelector(getMaxTemps);
  const dates = useSelector(getDates);
  const humidities = useSelector(getHumidities);
  const precips = useSelector(getPrecips);
  const icons = useSelector(getIcons);
  const conditions = useSelector(getConditions);
  const descriptions = useSelector(getDescriptions);

  return (
    <section className="list-wrapper">
      <Link to="/details">
        <button className="go-back" type="button">
          <FaArrowLeft />
          <h4>Go Back</h4>
        </button>
      </Link>
      {dates.map((date, index) => (
        <ul key={date} className="data-list">
          <li className="list-title"><h3>{date}</h3></li>
          <li className="list-item">
            <img
              src={`./${icons[index]}.svg`}
              alt={conditions[index]}
              width="30"
              height="30"
            />
          </li>
          <li className="list-item">{descriptions[index]}</li>
          <li className="list-item">{`Max. Temperature: ${maxTemps[index]} °C`}</li>
          <li className="list-item">{`Min. Temperature: ${minTemps[index]} °C`}</li>
          <li className="list-item">{`Precipitation: ${precips[index]} mm`}</li>
          <li className="list-item">{`Humidity: ${humidities[index]} %`}</li>
        </ul>
      ))}
    </section>
  );
};

export default WeatherDetails;
