import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <Image
          src="/contact-hero.jpg"
          alt="Contact Hero Background"
          fill
          className="object-cover opacity-20"
          quality={100}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-xl opacity-90">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg 
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Image Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/customer-service.jpg"
              alt="Customer Service"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/office-location.jpg"
              alt="Office Location"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 dark:border-gray-700 pb-6 hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const contactInfo = [
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: "Email",
    details: "support@company.com",
    image: "/email-icon.png"
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    title: "Điện thoại",
    details: "(123) 456-7890",
    image: "/phone-icon.png"
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Địa chỉ",
    details: "123 Đường ABC, Quận XYZ, TP.HCM",
    image: "/location-icon.png"
  }
]

const faqs = [
  {
    question: "Làm thế nào để đặt hàng?",
    answer: "Bạn có thể dễ dàng đặt hàng thông qua website của chúng tôi hoặc liên hệ trực tiếp với đội ngũ hỗ trợ."
  },
  {
    question: "Chính sách đổi trả như thế nào?",
    answer: "Chúng tôi chấp nhận đổi trả trong vòng 30 ngày kể từ ngày mua hàng với sản phẩm còn nguyên vẹn."
  },
  {
    question: "Thời gian giao hàng mất bao lâu?",
    answer: "Thông thường đơn hàng sẽ được giao trong vòng 2-3 ngày làm việc tùy theo khu vực."
  }
]