import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { getPrecips, getDates } from '../../redux/weatherData/weatherDataSlice';
import './Precipitation.css';

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

  return <Bar data={precipitationData} className="precip" />;
};

export default Precipitation;
