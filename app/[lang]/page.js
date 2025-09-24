import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';

export default function HomePage() {
  const t = useTranslations('header');

  return (
    <div>
      {/* <div className='hero-vid relative h-screen overflow-hidden'>
        <video autoPlay loop muted className='absolute w-full h-full object-cover'>
          <source src='/videos/slider-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <HeroSlider />
      <div className="bg-white">
        {/* Main Value Proposition Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-green-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Crafted Excellence, <span className="text-green-700">Delivered Worldwide</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From our workshop to your home, we create exceptional furniture pieces that combine
                timeless craftsmanship with modern functionality. Every piece tells a story of dedication,
                quality, and artistic vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <i className="fa fa-paint-brush fa-2x" aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Master Craftsmanship</h3>
                <p className="text-gray-600">Hand-selected materials meet time-honored techniques in every piece we create</p>
              </div>

              <div className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <i className="fa fa-truck fa-2x" aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Shipping</h3>
                <p className="text-gray-600">Safe, secure delivery to your doorstep anywhere in the world</p>
              </div>

              <div className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <i className="fa fa-diamond fa-2x" aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Only the finest materials and meticulous attention to every detail</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Signature Collection</h2>
              <p className="text-lg text-gray-600">Discover furniture pieces that transform spaces and elevate experiences</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Service Trolleys", desc: "Perfect for entertaining with style and convenience", imgSrc: "/images/0205202568154dcebd0f0.jpeg" },
                { name: "Coffee Tables", desc: "Elegant centerpieces that bring rooms together", imgSrc: "/images/020520256815528407e21-1200x1290.jpeg" },
                { name: "Tables", desc: "Create warmth and ambiance in any space", imgSrc: "/images/0205202568154e422520d.jpeg" },
                { name: "Side Tables", desc: "Versatile accent pieces with sophisticated design", imgSrc: "/images/0205202568154f32d0dce.jpeg" },
                { name: "Zigon Tables", desc: "Unique geometric designs that make statements", imgSrc: "/images/d73442b9-ee23-45f4-8cd2-d8018b0c33e1_size750x750_cropTop.webp" }
              ].map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`h-75 rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform`}>
                    <Image
                      width={300}
                      height={300}
                      src={product.imgSrc}
                      alt={product.name}
                      className="object-cover rounded-xl w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl text-center font-bold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-center">{product.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/products">
                <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Furniture?</h2>
                <div className="space-y-4">
                  {[
                    { text: "Premium materials sourced from sustainable suppliers" },
                    { text: "Expert craftsmanship with decades of experience" },
                    { text: "Custom designs tailored to your space and style" },
                    { text: "Worldwide shipping with secure packaging" },
                    { text: "Comprehensive warranty and after-sales support" },
                    { text: "Wholesale and retail options available" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <i className="fa fa-check-square-o fa-2x w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 ">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-200 to-green-50 p-8 rounded-2xl">
                <div className="text-center">
                  {/* <div className="text-6xl mb-4">🏆</div> */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Quality Management</h3>
                  <p className="text-gray-600 mb-6">
                    We implement rigorous quality control at every stage of production, ensuring that each piece meets our exacting standards before it reaches your home.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-600">Quality Tested</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">5+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping & Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Experience, Global Reach</h2>
              <p className="text-lg text-gray-600">From order to delivery, we ensure your journey with us is exceptional</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-globe fa-2x text-blue-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">Free Worldwide Shipping</h3>
                <p className="text-sm text-gray-600">Complimentary shipping on all orders with professional packaging</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-shopping-cart fa-2x text-green-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">Wholesale & Retail</h3>
                <p className="text-sm text-gray-600">Flexible purchasing options for businesses and individual customers</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-star fa-2x text-purple-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-sm text-gray-600">Dedicated support team ensuring your complete satisfaction</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-leaf fa-2x text-green-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">Sustainable Practices</h3>
                <p className="text-sm text-gray-600">Eco-friendly materials and responsible sourcing for lasting quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Preview */}
        <section className="py-16 px-4 bg-gradient-to-b from-green-700 to-green-100 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Customers Say</h2>
            <div className="bg-black/10 backdrop-blur-sm rounded-xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star fa-2x text-yellow-500" aria-hidden="true"></i>
                ))}
              </div>
              <blockquote className="text-xl italic mb-4">
                &quot;I was looking for a unique coffee table, and the Zigon design exceeded all my expectations. The craftsmanship is outstanding!&quot;
              </blockquote>
              <div className="text-green-800 font-semibold">— Metin U.</div>
            </div>
            <Link href="/about">
              <button className="mt-8 bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Read More Reviews
              </button>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover our complete collection and find the perfect pieces for your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Browse Collection
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}