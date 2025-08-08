import { motion } from "framer-motion";
import { useState } from "react";
import { TABS } from "../constants/tabs";
import Bevrages from "./menuPages/Bevrages";
import IceCream from "./menuPages/IceCream";
import Veg from "./menuPages/Veg";
import NonVeg from "./menuPages/nonVeg";

const HomePage = () => {
  const [isActive, setIsActive] = useState("Veg");

  return (
    <div className="min-h-screen w-full overflow-x-hidden  bg-gradient-to-br from-amber-100 via-orange-200 to-red-100 p-4">
      <header className="rounded-md p-4 flex justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl mx-6 font-bold text-gray-800"
        >
          MFC <span className="font-sans  text-amber-500"> Bestseller </span> menu
        </motion.h1>
      </header>
      <div className="p-2 flex flex-wrap justify-center gap-2 w-full mt-4">
        {TABS.map((tab) => (
          <button
            onClick={() => setIsActive(tab.id)}
            key={tab.id}
            title={tab.label}
            aria-pressed={isActive === tab.id}
            className={`flex items-center cursor-pointer gap-1 px-3 py-1.5 text-sm  rounded-md font-medium transition-colors duration-300 ${
              isActive === tab.id
                ? "bg-amber-500 text-white"
                : "bg-amber-300 text-gray-800 hover:bg-amber-400"
            }`}
          >
            
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-6">
        {isActive === "Veg" && <Veg />}
        {isActive === "NonVeg" && <NonVeg />}
        {isActive === "Bevrages" && <Bevrages />}
        {isActive === "IceCream" && <IceCream />}
      </div>
    </div>
  );
};

export default HomePage;
