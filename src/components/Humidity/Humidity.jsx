import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { getHumidities, getDates } from '../../redux/weatherData/weatherDataSlice';

const Humidity = () => {
  const humidities = useSelector(getHumidities);
  const dates = useSelector(getDates);

  const humidityData = {
    labels: dates,
    datasets: [
      {
        label: 'Humidity (%)',
        data: humidities,
        backgroundColor: 'green',
        fill: 'start',
      },
    ],
  };

  return <Line data={humidityData} className="humidity" />;
};

export default Humidity;
