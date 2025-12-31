'use client'

import Image from 'next/image'
import { FaLeaf, FaCheckCircle } from 'react-icons/fa'
import { GiChicken } from 'react-icons/gi'

export default function About() {
  const features = [
    {
      icon: <GiChicken className="text-5xl" />,
      title: 'Quality Livestock',
      description: 'Healthy, well-raised poultry and goats',
    },
    {
      icon: <FaLeaf className="text-5xl" />,
      title: 'Organic Farming',
      description: 'Natural feed and sustainable practices',
    },
    {
      icon: <FaCheckCircle className="text-5xl" />,
      title: 'Trusted Service',
      description: 'Reliable supply and quality assurance',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Enterprise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Text Content */}
            <div>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
                M I Multipurpose Enterprise is a trusted name in poultry farming and livestock rearing in Benin City, Edo State.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We specialize in raising healthy broilers and layers, providing fresh farm products directly to our customers.
                Our commitment to quality and sustainability ensures that every product meets the highest standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From day-old chicks to mature birds, frozen chicken products, and organic manure, we offer a complete range
                of poultry and livestock solutions for both individual consumers and businesses.
              </p>
            </div>

            {/* Farm Image */}
            <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-farm.jpg"
                alt="M I Multipurpose Enterprise Farm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-accent-light/20 to-accent/10 p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-accent/20"
              >
                <div className="text-secondary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
