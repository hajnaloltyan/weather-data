import { NavLink } from 'react-router-dom';
import './Options.css';

const Options = () => (
  <section className="options">
    <nav className="optionsLinks">
      <NavLink to="list" className="optionLink even-link">Detailed List</NavLink>
      <NavLink to="all-charts" className="optionLink odd-link">All Charts</NavLink>
      <NavLink to="temperatures" className="optionLink even-link">Temperatures</NavLink>
      <NavLink to="precipitation" className="optionLink odd-link">Precipitation</NavLink>
      <NavLink to="humidity" className="optionLink even-link">Humidity</NavLink>
    </nav>
  </section>
);

export default Options;
