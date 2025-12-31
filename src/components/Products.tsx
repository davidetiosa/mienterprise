'use client'

import Image from 'next/image'

export default function Products() {
  const products = [
    {
      image: '/images/broilers.jpg',
      title: 'Live Broilers',
      details: [
        '4 weeks old broilers',
        '8 weeks old broilers',
        'Ready for market',
        'Healthy & vaccinated',
      ],
    },
    {
      image: '/images/layers.jpg',
      title: 'Layers',
      details: [
        'Point-of-lay layers',
        'Active egg producers',
        'Different age ranges',
        'High productivity breeds',
      ],
    },
    {
      image: '/images/goats.jpg',
      title: 'Goats',
      details: [
        'Quality livestock',
        'Various breeds available',
        'Healthy & well-fed',
        'Suitable for all purposes',
      ],
    },
    {
      image: '/images/frozen-chicken.jpg',
      title: 'Frozen Chicken',
      details: [
        'Whole frozen chicken',
        'Fresh gizzards',
        'Chicken feet',
        'Other parts available',
      ],
    },
    {
      image: '/images/eggs.jpg',
      title: 'Fresh Eggs',
      details: [
        'Farm-fresh daily',
        'Large & medium sizes',
        'Bulk orders available',
        'Organic & nutritious',
      ],
    },
    {
      image: '/images/manure.jpg',
      title: 'Organic Manure',
      details: [
        '100% organic poultry waste',
        'Rich in nutrients',
        'Perfect for gardens & farms',
        'Bulk quantities available',
      ],
    },
  ]

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-accent-light/10 via-white to-accent-light/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products & Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of poultry and livestock products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {product.title}
                </h3>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <ul className="space-y-3">
                  {product.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 border-b border-gray-100 pb-3 last:border-0"
                    >
                      <span className="text-primary font-bold mr-3">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
