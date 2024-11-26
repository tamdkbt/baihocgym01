 'use client'
import { useState } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    products: []
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Gửi data đến API endpoint của bạn
      const response = await fetch('/api/generate-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Tải file PDF
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'bao-gia.pdf'
        document.body.appendChild(a)
        a.click()
        a.remove()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Họ và tên
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Số điện thoại
        </label>
        <input
          type="tel"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Địa chỉ
        </label>
        <textarea
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Sản phẩm quan tâm
        </label>
        <div className="space-y-2">
          {['Máy đẩy ngực', 'Máy đẩy vai', 'Tạ tay', 'Tạ đĩa'].map((product) => (
            <label key={product} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                value={product}
                onChange={(e) => {
                  const products = e.target.checked
                    ? [...formData.products, product]
                    : formData.products.filter(p => p !== product)
                  setFormData({...formData, products})
                }}
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">{product}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
      >
        Nhận Báo Giá
      </button>
    </form>
  )
}