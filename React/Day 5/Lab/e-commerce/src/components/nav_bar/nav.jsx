import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage, changeTheme } from '../../redux/action';

function Nav() {

    const dispatch = useDispatch()

    const lang = useSelector((state)=> {
      return state.lang;
    })

    const theme = useSelector((state) => {
      return state.theme;
    })

    function handelLang (e) {
      dispatch(changeLanguage(lang === "EN" ? "AR" : "EN"))
    }

    function handelTheme (e) {
      dispatch(changeTheme(theme === "light" ? "dark" : "light"))
    }
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shopify</Link>
                  <div className="navbar-nav ms-auto">
                    <Link className="nav-link" to="/register">Register</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <button className='btn btn-light' onClick={handelLang}>{lang}</button>
                    <button className='btn btn-light' onClick={handelTheme}>{theme}</button>
                  </div>
              </div>
        </nav>
      </>
    )
  }
  
  export default Nav;