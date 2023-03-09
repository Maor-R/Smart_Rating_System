import { NavLink, Link } from 'react-router-dom';
import  Search  from '../products/Search';
import { useProductsRatingsContext } from "../../context/productsRatings/ProductsRatingsContext";

const Navbar = () => {
  const {
    productsFilter
  } = useProductsRatingsContext();
  return (
    <nav className="navbar bg-dark">
      <div className="container">
 
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/search_product'
              className={ (({ isActive }) => (productsFilter.length===0 ? 'link disabled' : isActive? 'link active':'link'))  }
            >
              Search Product
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/add_product'
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Add Product
            </NavLink>
          </li>
        </ul>
        <Search/>
        <h1 className='logo'>
          <i className='icon'/>
          <Link to="/">Smart Rating System</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
