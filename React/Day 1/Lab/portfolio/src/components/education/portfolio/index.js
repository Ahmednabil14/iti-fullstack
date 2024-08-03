import './index.css'
import Footer from '../footer/index'

export default function Portfolio () {
    return (
        <div className="portfolio mt-5 text-light position-relative">
            <h1 className='p-4 text-dark'>Portfolio</h1>
            <div className="portfolio__container">
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-3">
                <div class="col">
                    <div class="card bg-secondary p-5 text-center">
                    <div class="card-body">
                        <h5 class="card-title text-decoration-underline" style={{textUnderlineOffset: '1rem'}}>WEB DESIGN</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark p-5 text-center">
                    <div class="card-body">
                        <h5 class="card-title text-decoration-underline" style={{textUnderlineOffset: '1rem'}}>MOBILE DESIGN</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-secondary p-5 text-center">
                    <div class="card-body">
                        <h5 class="card-title text-decoration-underline" style={{textUnderlineOffset: '1rem'}}>LOGO DESIGN</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark p-5 text-center">
                    <div class="card-body">
                        <h5 class="card-title">WEB APPLICATION</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-secondary p-5 text-center">
                    <div class="card-body">
                        <h5 class="card-title">MOBILE APPLICATION</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark p-5 text-center">
                    <div class="card-body">
                        <h5 class="card-title">PWA DEVELOPMENT</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}