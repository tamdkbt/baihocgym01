import Image from 'next/image'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800">
        <Image
          src="/gym-hero.jpg"
          alt="Gym Equipment"
          fill
          className="object-cover opacity-30"
          quality={100}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Thiết Bị Gym Chuyên Nghiệp</h1>
          <p className="text-xl opacity-90">Nâng tầm phòng gym của bạn với thiết bị chất lượng cao</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{category.name}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <ProductCard key={productIndex} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quote Form Section */}
      <div id="quoteForm" className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Đăng Ký Nhận Báo Giá</h2>
          <QuoteForm />
        </div>
      </div>
    </main>
  )
}

const categories = [
  {
    name: "Máy Tập",
    products: [
      {
        name: "Máy Đẩy Ngực (Bench Press)",
        description: "Máy đẩy ngực chuyên nghiệp với khung thép chắc chắn, đệm cao cấp và hệ thống an toàn tiên tiến.",
        image: "/bench-press.jpg"
      },
      {
        name: "Máy Đẩy Vai (Shoulder Machine)",
        description: "Máy đẩy vai đa năng với nhiều góc tập luyện, phù hợp cho mọi đối tượng người tập.",
        image: "/shoulder-machine.jpg"
      }
    ]
  },
  {
    name: "Các Loại Tạ",
    products: [
      {
        name: "Tạ Tay (Dumbbell)",
        description: "Bộ tạ tay cao cấp với nhiều mức trọng lượng, được mạ chrome chống gỉ sét.",
        image: "/dumbbell.jpg"
      },
      {
        name: "Tạ Đĩa (Competition Plates)",
        description: "Tạ đĩa thi đấu đạt chuẩn Olympic, được làm từ thép đặc với độ chính xác cao.",
        image: "/weight-plates.jpg"
      }
    ]
  }
]
