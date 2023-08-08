import Humidity from '../Humidity/Humidity';
import Precipitation from '../Precipitation/Precipitation';
import Temperatures from '../Temperatures/Temperatures';

const WeatherCharts = () => (
  <section className="weather-charts">
    <Temperatures />
    <Precipitation />
    <Humidity />
  </section>
);

export default WeatherCharts;
