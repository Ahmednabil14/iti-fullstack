import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shopify</Link>
                  <div className="navbar-nav ms-auto">
                    <Link className="nav-link" to="/register">Register</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                  </div>
              </div>
        </nav>
      </>
    )
  }
  
  export default Nav;