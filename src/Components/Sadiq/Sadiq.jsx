import logo from '../../assets/Features-of-best-Quran-App.webp'

const Sadiq = () => {
    return (
        <div>
            <div className="bg-white py-12">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
                    <div className="text-center md:text-start">
                        <span className="bg-[#C9AC75] text-white md:text-3xl  font-semibold md:px-4 md:py-1">
                            Sadiq: Your Daily Companion
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                            Perfect
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                            Companion on
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                            Your joiurney to
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                            Please Allah
                        </h1>
                        <div className="mt-8 flex space-x-4">
                        <a
                            href="#"
                            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600"
                        >
                            Learn More
                        </a>
                        <a
                            href="#"
                            className="bg-gray-100 text-green-500 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
                        >
                            Download Now
                        </a>
                    </div>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center">
                        <div className="w-full md:w-2/3">
                            <img
                                src={logo}
                                alt="App preview"
                                className=" rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sadiq;