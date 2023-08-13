
const Banner = () => {
    return (
        <div className="hero h-screen " style={{ backgroundImage: 'url(https://www.lego.com/cdn/cs/set/assets/blte07f71101dcbb455/Zen_garden.jpg?format=jpg&quality=80&width=700&dpr=1.5)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Build and tend a Japanese garden</h1>
                    <p className="mb-5">Grow your creativity with the new LEGO</p>
                    <button className="btn bg-red-600 border-none text-white hover:bg-red-700">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;