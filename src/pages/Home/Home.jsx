import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import TabComponent from "./TabComponent/TabComponent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabComponent />
        </div>
    );
};

export default Home;