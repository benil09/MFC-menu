import React from 'react'
import { menuData } from '../../constants/menu'
import VegImage from "../../assets/veg.png"

const Veg = () => {
  return (
    <div className="relative overflow-x-auto mt-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-black/30 max-w-4xl mx-auto">
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        <img
          src={VegImage}
          alt="Veg Menu"
          className="w-72 h-72 opacity-100  object-contain scale-90 hover:scale-100 transition-transform duration-500"
        />
      </div>
      <table className="relative z-10 min-w-full text-black bg-white/40 bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-100 opacity-70 rounded-lg">
        <thead>
          <tr className="bg-orange-200 text-left">
            <th className="px-4 py-2 border-b">Item</th>
            <th className="px-4 py-2 border-b whitespace-nowrap">Price&nbsp;(₹)</th>
          </tr>
        </thead>
        <tbody>
          {menuData.veg.map((item, index) => (
            <tr key={index} className="hover:bg-orange-100">
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Veg
