'use client'

import { useState, FormEvent } from 'react'
import { FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    // Simulate form submission (replace with your actual API endpoint)
    try {
      // In production, send to your backend API or email service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      })
      setFormData({ name: '', email: '', phone: '', message: '' })

      // Hide message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: null, message: '' })
      }, 5000)
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      })
    }
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Location',
      content: (
        <>
          No. 3 Ogbebor Street<br />
          Off New Road, Ugbighoko Quarters<br />
          Upper Ekenhua Road<br />
          Benin City, Edo State<br />
          Nigeria
        </>
      ),
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Business Hours',
      content: (
        <>
          Monday - Saturday<br />
          8:00 AM - 6:00 PM<br /><br />
          Sunday<br />
          Closed
        </>
      ),
    },
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: 'Services',
      content: (
        <>
          • Retail Sales<br />
          • Wholesale Orders<br />
          • Farm Consultations<br />
          • Custom Orders
        </>
      ),
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our Farm
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{info.content}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Send Us A Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your Message or Inquiry"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Send Message
              </button>

              {/* Form Status Message */}
              {formStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
