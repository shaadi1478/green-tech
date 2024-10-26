import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const IslamicSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8 p-1 bg-[#FFFFFF]"
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
      animate={{ opacity: 1, x: 0 }}     // Slide in and fade in
      exit={{ opacity: 0, x: 100 }}      // Slide out to the right
      transition={{ duration: 0.5 }}      // Duration of the animation
    >
      {/* 10+ Islamic Apps */}
      <motion.div
        className="bg-white text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-3xl font-bold mb-4">10+ Islamic Apps</h2>
        <p className="text-lg mb-6">Bringing people closer to Allah</p>
        <Link to="/apps" className="text-blue-600 font-semibold" aria-label="Check out all apps">
          Check out all apps &rarr;
        </Link>
      </motion.div>

      {/* Sadaqah Jariyah */}
      <motion.div
        className="bg-green-300 text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-3xl font-bold mb-4">Sadaqah Jariyah</h2>
        <p className="text-lg mb-6">Help Us Reach Muslims Worldwide</p>
        <Link to="/donate" className="text-blue-600 font-semibold" aria-label="Donate">
          Donate &rarr;
        </Link>
      </motion.div>

      {/* Volunteer */}
      <motion.div
        className="bg-orange-400 text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-3xl font-bold mb-4">Volunteer</h2>
        <p className="text-lg mb-6">Got Skills & Want To Use For The Ummah?</p>
        <Link to="/volunteer" className="text-white font-semibold" aria-label="Get Involved">
          Get Involved &rarr;
        </Link>
      </motion.div>

      {/* What's New */}
      <motion.div
        className="bg-white text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-3xl font-bold mb-4">What's New?</h2>
        <p className="text-lg mb-6">
          Our Team at Bradford Muhammadi Masjid
        </p>
        <Link to="/news" className="text-blue-600 font-semibold" aria-label="Check out what's new">
          Check out &rarr;
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default IslamicSection;
