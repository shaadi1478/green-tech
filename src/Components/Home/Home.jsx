import images from '../../assets/gtaf-quran-app-download.webp'
const Home = () => {
    return (
        <div>
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto md:flex  items-center justify-around p-3">
                    <div className="text-center md:text-start">
                        <span className="bg-[#388AC5] text-white md:text-3xl text-2xl font-semibold md:px-4 md:py-1">
                            Hadith Collection (All in One)
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                            Understand Islam 
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        Through
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                         the Prophets <span className="inline-block">(ﷺ)</span>  
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        Ahadith 
                        </h1>
                        <div className="mt-8 flex md:space-x-4">
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

                    <div className="mt-8 flex items-center justify-center">
                        <div className="w-full md:w-2/3">
                            <img
                                src={images}
                                alt="App preview"
                                className="shadow-sm rounded-lg"
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;