import './index.css'
import header from "./header.avif"
import Footer from '../education/footer/index';

function Header() {
    return (
        <div className='header container-fluid p-0 position-relative'>
            <img src={header} alt="header"/>
            <div className='content position-absolute text-light'>
            <p className='display-1'>Ahmed Nabil</p>
            <p className='display-6'>Full Stack Developer</p>
            <div className='mt-5'>
            <a href='#footer'>
            <button type="button" class="btn btn-dark border-1 border-light px-5 py-2 me-5">CONTACT ME</button>
            </a>
            </div>
            </div>
        </div>

    )
}

export default Header;