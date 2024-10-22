import { Link } from "react-router-dom";

const IslamicSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8 p-1 bg-[#FFFFFF]">
      
      {/* 10+ Islamic Apps */}
      <div className="bg-white text-center p-6 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">10+ Islamic apps</h2>
        <p className="text-lg mb-6">Bringing people closer to Allah</p>
        <Link to='/apps' className="text-blue-600 font-semibold">   Check out all apps &rarr;</Link>
      </div>

      {/* Sadaqah Jariyah */}
      <div className="bg-green-300 text-center p-6 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Sadaqah Jariyah</h2>
        <p className="text-lg mb-6">Help Us Reach Muslims Worldwide</p>
        <Link to='/donate' className="text-blue-600 font-semibold">  Donate &rarr;</Link>
        
      </div>

      {/* Volunteer */}
      <div className="bg-orange-400 text-center p-6 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Volunteer</h2>
        <p className="text-lg mb-6">Got Skills & Want To Use For The Ummah?</p>
        <a href="#" className="text-white font-semibold">
          Get Involved &rarr;
        </a>
      </div>

      {/* What's New */}
      <div className="bg-white text-center p-6 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Whats New?</h2>
        <p className="text-lg mb-6">
          Our Team at Bradford Muhammadi Masjid
        </p>
        <a href="#" className="text-blue-600 font-semibold">
          Check out &rarr;
        </a>
      </div>
    </div>
  );
};

export default IslamicSection;
