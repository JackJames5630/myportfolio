import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import Portfolio from './portfolio';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            <ClientReviews />
            <Portfolio />

            <Footer />

        </div>
    )
}

export default home