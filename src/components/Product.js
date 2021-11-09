const Product = () => {
    return (
        <div>
            <div>
                <img src="/images/peproni.png" alt="peproni"></img>
                <div className="text-center">
                    <h2 className="font-bold text-lg py-2">Havanna Special</h2>
                    <span className="font-mono bg-purple-300 rounded-md py-1 px-2 text-sm">
                        Small
                    </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="rounded-md py-1 px-3 bg-gray-200 mr-3 font-smaller">
                        $50
                    </span>
                    <button className="py-1 px-3 rounded-md font-bold bg-yellow-300">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Product;
