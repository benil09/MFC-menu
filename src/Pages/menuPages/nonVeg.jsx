import { menuData } from "../../constants/menu";
import { motion } from "framer-motion";

const NonVeg = () => {
  return (
    <div className="relative overflow-x-auto mt-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-black/30 max-w-4xl mx-auto">
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        <p className="text-[70px] font-extrabold text-black opacity-30">
          NON-VEG
        </p>
      </div>
      <motion.table
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 rounded-lg opacity-70"
      >
        <thead>
          <tr className="bg-orange-200 text-left">
            <th className="px-4 py-2 border-b">Item</th>
            <th className="px-4 py-2 border-b whitespace-nowrap">
              Price&nbsp;(₹)
            </th>
          </tr>
        </thead>
        <tbody>
          {menuData.nonVeg.map((item, index) => (
            <tr key={index} className="hover:bg-orange-100">
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default NonVeg;
