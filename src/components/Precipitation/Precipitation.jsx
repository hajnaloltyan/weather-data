import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getPrecips, getDates } from '../../redux/weatherData/weatherDataSlice';

const Precipitation = () => {
  const precips = useSelector(getPrecips);
  const dates = useSelector(getDates);

  const precipitationData = {
    labels: dates,
    datasets: [
      {
        label: 'Daily Precipitation (mm)',
        data: precips,
        backgroundColor: 'blue',
        fill: 'start',
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
      <Bar data={precipitationData} className="precip" />
    </>
  );
};

export default Precipitation;
