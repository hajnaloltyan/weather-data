import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import PopularLocations from './components/PopularLocations/PopularLocations';
import WeatherCharts from './components/WeatherCharts/WeatherCharts';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import Temperatures from './components/Temperatures/Temperatures';
import Precipitation from './components/Precipitation/Precipitation';
import Humidity from './components/Humidity/Humidity';
import DetailsLayout from './components/Layouts/DetailsLayout';
import Options from './components/Options/Options';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PopularLocations />} />
        <Route path="details" element={<DetailsLayout />}>
          <Route path="options" element={<Options />} />
          <Route path="list" element={<WeatherDetails />} />
          <Route path="all-charts" element={<WeatherCharts />} />
          <Route path="temperatures" element={<Temperatures />} />
          <Route path="precipitation" element={<Precipitation />} />
          <Route path="humidity" element={<Humidity />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
