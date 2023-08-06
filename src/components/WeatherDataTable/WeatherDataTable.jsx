import { useSelector } from 'react-redux';
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
import './WeatherDataTable.css';

const WeatherTable = () => {
  const minTemps = useSelector(getMinTemps);
  const maxTemps = useSelector(getMaxTemps);
  const dates = useSelector(getDates);
  const humidities = useSelector(getHumidities);
  const precips = useSelector(getPrecips);
  const icons = useSelector(getIcons);
  const conditions = useSelector(getConditions);
  const descriptions = useSelector(getDescriptions);

  return (
    <section className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Icon</th>
            <th>Min Temperature</th>
            <th>Max Temperature</th>
            <th>Precipitation</th>
            <th>Humidity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={date}>
              <td>{date}</td>
              <td>
                <img
                  src={`./${icons[index]}.svg`}
                  alt={conditions[index]}
                  width="30"
                  height="30"
                />
              </td>
              <td>{`${minTemps[index]} °C`}</td>
              <td>{`${maxTemps[index]} °C`}</td>
              <td>{`${precips[index]} mm`}</td>
              <td>{`${humidities[index]} %`}</td>
              <td>{descriptions[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WeatherTable;
