import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faIdBadge } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    return (
        <footer className='position-absolute bottom-0'>
        <div className='row bg-black d-flex justify-content-center' style={{height: '11rem', width: '100vw'}}>
            <div className='col-4 align-content-center text-center'>
                <p className='fs-3'>
                    GET IN TOUCH
                </p>
                <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className='ps-2'>
                    ahmed@gmail.com
                </span>
                </div>
                <div>
                <FontAwesomeIcon icon={faIdBadge} />
                <span className='ps-3'>
                    +20 01092429329
                </span>
                </div>
            </div>
            <div className='col-4 align-content-center text-center'>
                <button type="button" className="btn btn-dark border-1 border-light px-5 py-2">CONTACT ME</button>
            </div>
            <div className='col-4 align-content-center text-center'>
                <div className='w-25 d-flex justify-content-around mb-3 mx-auto'>
                    <FontAwesomeIcon icon={faLinkedin} size='xl' />
                    <FontAwesomeIcon icon={faSquareFacebook} size='xl' />
                    <FontAwesomeIcon icon={faSquareXTwitter} size='xl'/>
                </div>
                <p>
                    Copyright ©2019 KR
                </p>
            </div>
        </div>
    </footer>
    
    )
}