import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelectedLocation } from '../../redux/search/searchSlice';

const DetailsLayout = () => {
  const name = useSelector(getSelectedLocation);
  return (
    <>
      <section className="details-layout">
        <h2 className="selected">
          Selected Location:
          {' '}
          {name}
        </h2>
        <nav className="detailsLinks">
          <NavLink to="all-details">All Details</NavLink>
          <NavLink to="table">Table</NavLink>
          <NavLink to="all-charts">All Charts</NavLink>
          <NavLink to="temperatures">Temperatures</NavLink>
          <NavLink to="precipitation">Precipitation</NavLink>
          <NavLink to="humidity">Humidity</NavLink>
        </nav>
      </section>

      <Outlet />
    </>
  );
};

export default DetailsLayout;
