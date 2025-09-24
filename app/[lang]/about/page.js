import Link from "next/link";

export default function About() {

    const missionPoints = [
        { icon: "diamond", title: "Quality", desc: "Using only the finest materials and time-honored techniques." },
        { icon: "lightbulb-o", title: "Innovation", desc: "Blending classic styles with contemporary needs." },
        { icon: "leaf", title: "Sustainability", desc: "Building pieces that last, reducing waste and promoting responsible sourcing." },
        { icon: "star", title: "Customer Satisfaction", desc: "Ensuring every interaction and every product exceeds expectations." }
    ];

    const products = [
        { name: "Tables", desc: "Cozy and inviting focal points for any home" },
        { name: "Service Trolleys", desc: "Perfect for entertaining and everyday convenience" },
        { name: "Service Coffee Tables", desc: "Elegant and practical centerpieces for your living space" },
        { name: "Zigon Coffee Tables", desc: "Unique designs that make a statement" },
        { name: "Side Tables", desc: "Versatile and stylish additions to your decor" }
    ];

    const testimonials = [
        {
            text: "The service trolley I purchased from Monteri is not only beautiful but incredibly functional. It's become the centerpiece of my dining room!",
            author: "Stefan K.",
            location: "Frankfurt, Germany"
        },
        {
            text: "I was looking for a unique coffee table, and the Zigon design exceeded all my expectations. The craftsmanship is outstanding!",
            author: "Metin U.",
            location: "Bursa, Turkey"
        },
        {
            text: "I recently purchased a side table and it's the perfect addition to my living room. Beautifully crafted and very sturdy!",
            author: "Oğuz P.",
            location: "Istanbul, Turkey"
        },
        {
            text: "The service coffee table is both elegant and practical. It's a beautiful centerpiece that also offers great functionality.",
            author: "Nur K.",
            location: "Istanbul, Turkey"
        },
        {
            text: "I'm impressed with the quality of the materials used in the service trolley. It's clear that Monteri values craftsmanship.",
            author: "Ana M.",
            location: "Tbilisi, Georgia"
        },
        {
            text: "The Zigon coffee tables are a conversation starter! They add a unique touch to my home decor and are very well-made.",
            author: "Batuhan M.",
            location: "Edirne, Turkey"
        }
    ];

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-emerald-900 to-green-900 text-white py-16">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Us</h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                            Crafting furniture that transforms houses into homes, one piece at a time
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Quote Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute top-4 left-4 opacity-10">
                            <i className="fa fa-quote-right fa-4x" aria-hidden="true"></i>
                        </div>
                        <blockquote className="relative">
                            <p className="text-2xl md:text-3xl font-light text-gray-700 italic text-center leading-relaxed mb-6">
                                "Furniture is more than wood and metal—it's the heart of a home, the silent witness to life's moments."
                            </p>
                            <footer className="text-center">
                                <span className="text-lg font-semibold text-green-600">— Bahadır Daylan</span>
                                <p className="text-sm text-gray-500 mt-1">Founder & Master Craftsman</p>
                            </footer>
                        </blockquote>
                    </div>

                    {/* Our Story Section */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
                                </div>
                                <h3 className="text-2xl font-semibold text-green-600 mb-4">A Legacy of Craftsmanship</h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bahadır's passion for furniture design began in a small workshop, where curiosity and creativity first took shape. Inspired by the timeless beauty of handcrafted pieces and the stories they hold, he set out to create furniture that marries form and function.
                                    </p>
                                    <p>
                                        With a background in woodworking, Bahadır honed his skills, learning from master craftsmen and experimenting with innovative techniques. Each piece is a testament to his dedication to excellence.
                                    </p>
                                    <p>
                                        Today, Monteri stands as a symbol of quality, creativity, and the enduring value of handmade furniture. From the first sketch to the final polish, every item is crafted with care.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
                                <div className="text-center">
                                    <i className="fa fa-globe fa-5x text-green-600 mb-4" aria-hidden="true"></i>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-4">From Workshop to World</h4>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-3xl font-bold text-green-600">10+</div>
                                            <div className="text-sm text-gray-600">Years Experience</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-3xl font-bold text-green-600">100+</div>
                                            <div className="text-sm text-gray-600">Happy Homes</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-3xl font-bold text-green-600">5+</div>
                                            <div className="text-sm text-gray-600">Countries</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-3xl font-bold text-green-600">100%</div>
                                            <div className="text-sm text-gray-600">Handcrafted</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center mb-4">
                                {/* <Globe className="w-8 h-8 text-green-600 mr-3" /> */}
                                <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                At Monteri, our mission is to create furniture that inspires and endures. We believe in the power of thoughtful design, the beauty of natural materials, and the importance of craftsmanship.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {missionPoints.map((point, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <i className={`fa fa-${point.icon} fa-2x w-8 h-8 text-green-600`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
                                    <p className="text-gray-600 text-sm">{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Products Section */}
                    <section className="mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
                                <p className="text-xl text-gray-600">Each piece in our collection is designed to enhance your living experience</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product, index) => (
                                    <div key={index} className="group hover:bg-green-50 rounded-xl p-6 transition-colors cursor-pointer">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-3 group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                                                <i className="fa fa-arrow-right fa-2x text-green-600" aria-hidden="true"></i>
                                                {/* <product.icon className="w-6 h-6 text-green-600" /> */}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                                                <p className="text-gray-600 text-sm">{product.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl p-8 md:p-12 text-white">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl font-bold mb-4">Our Commitment</h2>
                                <p className="text-xl opacity-90">We implement total quality management and prioritize customer satisfaction in everything we do</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <i className="fa fa-shield fa-3x text-green-400 mx-auto mb-4" aria-hidden="true"></i>
                                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                                    <p className="opacity-90">Every piece undergoes rigorous quality control before leaving our workshop</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-globe fa-3x text-green-400 mx-auto mb-4" aria-hidden="true"></i>
                                    <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                                    <p className="opacity-90">Wholesale and retail sales with worldwide shipping capabilities</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-heart fa-3x text-green-400 mx-auto mb-4" aria-hidden="true"></i>
                                    <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                                    <p className="opacity-90">Your satisfaction is our priority, from first contact to final delivery</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
                            <p className="text-xl text-gray-600">Real stories from satisfied customers around the world</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fa fa-star text-yellow-500" aria-hidden="true"></i>
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-700 mb-4 italic">
                                        "{testimonial.text}"
                                    </blockquote>
                                    <footer className="text-center">
                                        <p className="font-semibold text-green-600">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </footer>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-2xl p-8 text-white">
                            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
                            <p className="text-xl mb-6 opacity-90">Discover our complete collection and bring timeless craftsmanship to your home</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/products">
                                    <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        View Products
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}