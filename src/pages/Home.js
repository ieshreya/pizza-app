import Products from "../components/Products";

const Home = () => {
    return (
        <>
            <div className="hero py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg font-mono">Feeling Hungry?</h6>
                        <h1 className="text-3xl md:text-6xl font-bold">
                            Don't resist!
                        </h1>
                        <button className="px-6 bg-yellow-300 py-2 rounded-full font-bold mt-6 hover:bg-yellow-400 shadow-2xl">
                            Order Now
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img
                            className="w-4/5"
                            src="/images/pizza.png"
                            alt="pizza"
                        ></img>
                    </div>
                </div>
            </div>
            <div className="pb-24">
                <Products />
            </div>
        </>
    );
};
export default Home;
