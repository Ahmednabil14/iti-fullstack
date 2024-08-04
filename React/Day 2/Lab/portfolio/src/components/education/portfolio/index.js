import './index.css'
import Footer from '../footer/index'

export default function Portfolio () {
    const cards = [
        { title: 'WEB DESIGN' },
        { title: 'MOBILE DESIGN' },
        { title: 'LOGO DESIGN' },
        { title: 'WEB APPLICATION' },
        { title: 'MOBILE APPLICATION' },
        { title: 'PWA DEVELOPMENT' },
    ]

    function PortfolioCard({ title, index }) {
        return (
            <div class="col">
                <div class={`card p-5 text-center ${index % 2 === 0 ? 'bg-secondary' : 'bg-dark'}`}>
                    <div class="card-body">
                        <h5 class="card-title" style={{textDecoration: index < 3 ? 'underline' : 'none', textUnderlineOffset: '1rem'}}>{title}</h5>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="portfolio mt-5 text-light position-relative">
            <h1 className='p-4 text-dark'>Portfolio</h1>
            <div className="portfolio__container">
                <div class="row row-cols-1 row-cols-md-3 g-4 mx-3">
                    {cards.map((card, index) => (
                        <PortfolioCard key={index} title={card.title} index={index} />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}