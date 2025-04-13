import React from 'react'
import { useGetProductQuery } from '../features/ProductApi'
import { meta } from '@eslint/js'

const TopSeller = () => {
    const {data ,isLoading} = useGetProductQuery()
   const baseUrl =import.meta.env.VITE_BASE_URL
    console.log(data,'fruits data')
  return (
  <section class="py-10 px-6 bg-gradient-to-br from-amber-100 to-amber-300 min-h-[70vh] mt-20">
      <div class="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-950 text-center mb-3">
          World’s Most Luxurious Fruits
        </h2>
        <p className="text-center text-amber-800 mb-10 max-w-2xl mx-auto">
          Discover the rarest and most exquisite fruits that come with a lavish price tag.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={`${baseUrl}${item?.image}`}
                alt={item?.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-amber-900">
                  {item?.title || 'Unknown Fruit'}
                </h3>
          
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopSeller