import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className='p-3'>Homepage 1</div>
            <Card/>
            <Footer/>
        </div>
    )
}

export default HomePage