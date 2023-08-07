import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getMinTemps, getMaxTemps, getDates } from '../../redux/weatherData/weatherDataSlice';

const options = {
  indexAxis: 'y',
  scales: {
    x: {
      stacked: true, ticks: { color: 'white' }, grid: { color: 'white' }, position: 'top',
    },
    y: { stacked: true, ticks: { color: 'white' }, grid: { color: 'white' } },
  },
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
  },
  maintainAspectRatio: false,
};

const Temperatures = () => {
  const minTemps = useSelector(getMinTemps);
  const maxTemps = useSelector(getMaxTemps);
  const dates = useSelector(getDates);

  const temperatureData = {
    labels: dates,
    datasets: [
      {
        label: 'Min Daily Temperature (°C)',
        data: minTemps,
        backgroundColor: 'darkblue',
      },
      {
        label: 'Max Daily Temperature (°C)',
        data: maxTemps,
        backgroundColor: 'darkred',
      },
    ],
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
        <Bar data={temperatureData} options={options} />
      </div>
    </>
  );
};

export default Temperatures;
