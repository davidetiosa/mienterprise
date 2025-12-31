'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - REPLACE WITH YOUR IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Poultry farm background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 to-primary/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in">
          Fresh Poultry & Quality Livestock
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow-sm animate-fade-in-delay">
          Your trusted source for premium broilers, layers, eggs, and organic produce in Benin City
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Link
            href="#products"
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
          >
            View Our Products
          </Link>
          <Link
            href="#contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-full font-semibold text-lg transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
