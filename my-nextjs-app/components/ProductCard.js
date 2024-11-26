'use client'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const handleQuoteClick = () => {
    document.getElementById('quoteForm').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-[300px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
        <button 
          onClick={handleQuoteClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-300"
        >
          Nhận Báo Giá
        </button>
      </div>
    </div>
  )
} 