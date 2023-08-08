import { Outlet, NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { getSelectedLocation } from '../../redux/search/searchSlice';
import './DetailsLayout.css';

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
      </section>

      <Outlet />
    </>
  );
};

export default DetailsLayout;
