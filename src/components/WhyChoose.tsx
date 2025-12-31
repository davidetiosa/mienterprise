export default function WhyChoose() {
  const benefits = [
    {
      number: '01',
      title: 'Quality Assurance',
      description: 'All our livestock are raised with proper nutrition, vaccination, and care protocols',
    },
    {
      number: '02',
      title: 'Fresh Products',
      description: 'Direct from farm to customer, ensuring maximum freshness and quality',
    },
    {
      number: '03',
      title: 'Competitive Pricing',
      description: 'Fair prices for both retail and wholesale customers',
    },
    {
      number: '04',
      title: 'Reliable Supply',
      description: 'Consistent stock availability for all your poultry and livestock needs',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose M I Multipurpose Enterprise?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 hover:bg-gray-50 rounded-lg transition-all duration-300"
            >
              <div className="text-6xl font-bold text-primary-light opacity-30 mb-4">
                {benefit.number}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
