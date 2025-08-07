import React from 'react'
import { menuData } from '../../constants/menu'

const IceCream = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mt-4 space-y-6">
        <div className="bg-gradient-to-r from-yellow-100 to-pink-100 text-center py-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-pink-600">
            Ice Creams starting at ₹{menuData.iceCream.startingAt}
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-orange-600 mb-2">Scoop Pricing ( ₹ ) </h3>
          <ul className="list-disc list-inside text-gray-700">
            {Object.entries(menuData.iceCream.scoopPrices).map(([scoop, price]) => (
              <li key={scoop}>
                {scoop.replace('scoop', ' Scoop')}: {price}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">Available Flavors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menuData.iceCream.flavors.map((flavor, index) => (
              <div
                key={index}
                className={`${flavor.color} p-4 rounded-lg shadow hover:shadow-lg transition duration-200 text-center`}
              >
                <p className="text-md font-medium text-gray-800">{flavor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IceCream
