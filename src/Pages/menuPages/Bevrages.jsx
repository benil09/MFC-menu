import { motion } from "framer-motion";
import {
  hotCoffee,
  mocktails,
  otherBeverages,
  shakes,
  teapot,
} from "../../constants/bevrages";
import { menuData } from "../../constants/menu";

const Veg = () => {
  return (
    <div className="relative overflow-x-auto mt-4   max-w-4xl mx-auto">
      
      <div className="my-8 ">
        <div className="border rounded-xl p-4 bg-white/20 shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">Best Sellers</h2>
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 opacity-70 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50  via-yellow-100 to-amber-100 "
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
              {menuData.beverages.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>

      <div className="my-8">
        <div className="border rounded-xl p-4 bg-white/20 shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">
            Captain's TeaPot
          </h2>
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 opacity-70 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 "
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
              {teapot.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
      <div className="my-8">
        <div className="border rounded-xl p-4 bg-white/20 shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">Hot Coffee</h2>
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 opacity-70 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 "
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
              {hotCoffee.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
      <div className="my-8">
        <div className="border rounded-xl p-4 bg-white/20 shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">Cold Coffee</h2>
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 opacity-70 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 "
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
              {hotCoffee.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
      <div className="my-8">
        <div className="border rounded-xl p-4 bg-white/20 shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">
            other Beverages
          </h2>
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 opacity-70 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 "
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
              {otherBeverages.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
      <div className="my-8">
        <div className="border rounded-xl p-4 bg-white/20 shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">
            Island Mocktails
          </h2>
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 opacity-70 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 "
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
              {mocktails.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
      <div className="my-8">
        <div className="border rounded-xl p-4 bg-white/20 shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">Shakes</h2>
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 opacity-70 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 "
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
              {shakes.map((item, index) => (
                <tr key={index} className="hover:bg-orange-100">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </div>
  );
};

export default Veg;
