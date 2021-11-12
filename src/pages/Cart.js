import React from "react";

const Cart = () => {
    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold text-3xl">Total Items In Cart</h1>
            <ul>
                <li className="mb-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                className="h-20"
                                src="/images/peproni.png"
                                alt="pizza"
                            />
                            <span className="font-bold  ml-4 w-48">Pizza</span>
                        </div>
                        <div>
                            <button className="bg-yellow-300 px-3 py-1 rounded-full focus:ring-2 focus:ring-yellow-500	 hover:bg-yellow-400 leading-none">
                                -
                            </button>
                            <b className="font-mono px-5">2</b>

                            <button className="bg-yellow-300 px-3 py-1 rounded-full focus:ring-2 focus:ring-yellow-500 hover:bg-yellow-400 leading-none">
                                +
                            </button>
                        </div>
                        <span className="font-bold font-mono">$ 200</span>
                        <button className=" font-bold bg-red-500 px-4 py-2 rounded-full text-white leading-none">
                            Delete
                        </button>
                    </div>
                </li>
                {/* next product */}

                <li className="mb-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                className="h-20"
                                src="/images/peproni.png"
                                alt="pizza"
                            />
                            <span className="font-bold  ml-4 w-48">Pizza</span>
                        </div>
                        <div>
                            <button className="bg-yellow-300 px-3 py-1 rounded-full focus:ring-2 focus:ring-yellow-500	 hover:bg-yellow-400 leading-none">
                                -
                            </button>
                            <b className="font-mono px-5">2</b>

                            <button className="bg-yellow-300 px-3 py-1 rounded-full focus:ring-2 focus:ring-yellow-500 hover:bg-yellow-400 leading-none">
                                +
                            </button>
                        </div>
                        <span className="font-bold font-mono">$ 200</span>
                        <button className=" font-bold bg-red-500 px-4 py-2 rounded-full text-white leading-none">
                            Delete
                        </button>
                    </div>
                </li>
            </ul>
            <hr className="my-6" />
            <div className="text-right">
                <b>Grand Total:</b> $3,900
            </div>
            <div className="text-right mt-6">
                <button className=" font-bold bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 leading-none">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Cart;
