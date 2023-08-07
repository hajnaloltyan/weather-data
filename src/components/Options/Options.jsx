import { NavLink } from 'react-router-dom';

const Options = () => (
  <section className="options">
    <nav className="detailsLinks">
      <NavLink to="list">Details List</NavLink>
      <NavLink to="all-charts">All Charts</NavLink>
      <NavLink to="temperatures">Temperatures</NavLink>
      <NavLink to="precipitation">Precipitation</NavLink>
      <NavLink to="humidity">Humidity</NavLink>
    </nav>
  </section>
);

export default Options;
