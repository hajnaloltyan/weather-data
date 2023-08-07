import { NavLink } from 'react-router-dom';
import './Options.css';

const Options = () => (
  <section className="options">
    <nav className="optionsLinks">
      <NavLink to="list" className="optionLink even">Detailed List</NavLink>
      <NavLink to="all-charts" className="optionLink odd">All Charts</NavLink>
      <NavLink to="temperatures" className="optionLink even">Temperatures</NavLink>
      <NavLink to="precipitation" className="optionLink odd">Precipitation</NavLink>
      <NavLink to="humidity" className="optionLink even">Humidity</NavLink>
    </nav>
  </section>
);

export default Options;
