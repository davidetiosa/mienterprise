import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-light mb-4">
              M I Multipurpose Enterprise
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in quality poultry and livestock farming in Benin City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-light mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-300 hover:text-primary-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-primary-light transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-300 hover:text-primary-light transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-primary-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-primary-light mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Broilers & Layers</li>
              <li>Fresh Eggs</li>
              <li>Frozen Chicken</li>
              <li>Organic Manure</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} M I Multipurpose Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
