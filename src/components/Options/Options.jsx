import { NavLink, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Options.css';

const Options = () => (
  <section className="options">
    <Link to="/">
      <button className="go-back" type="button">
        <FaArrowLeft />
        <h4>Go Back</h4>
      </button>
    </Link>
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
