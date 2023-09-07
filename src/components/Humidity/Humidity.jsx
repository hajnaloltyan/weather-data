import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
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

  const options = {
    indexAxis: 'y',
    scales: {
      x: { ticks: { color: 'black' }, grid: { color: 'black' }, position: 'top' },
      y: { ticks: { color: 'black' }, grid: { color: 'black' } },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <Link to="/details">
        <button className="go-back" type="button">
          <FaArrowLeft />
          <h4>Go Back</h4>
        </button>
      </Link>
      <div className="chart">
        <Line data={humidityData} options={options} className="humidity" />
      </div>
    </>
  );
};

export default Humidity;
