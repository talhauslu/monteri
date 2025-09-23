export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full">
                <h1 className="text-5xl font-extrabold mb-8 text-gray-800 text-center">About Us</h1>
                <blockquote className="italic text-lg text-gray-600 mb-6 border-l-4 border-green-400 pl-4">
                    "Furniture is more than wood and metal—it’s the heart of a home, the silent witness to life’s moments."
                    <span className="block mt-2 font-semibold">— [Relative’s Name]</span>
                </blockquote>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Story</h2>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">A Legacy of Craftsmanship</h3>
                    <p className="text-gray-700 mb-4">
                        [Relative’s Name]’s passion for furniture design began in a small workshop, where curiosity and creativity first took shape. Inspired by the timeless beauty of handcrafted pieces and the stories they hold, [he/she] set out to create furniture that marries form and function. What started as a personal pursuit soon grew into a mission: to bring bespoke, high-quality furniture into homes around the world.
                    </p>
                    <p className="text-gray-700 mb-4">
                        With a background in [woodworking/design/engineering], [Relative’s Name] honed [his/her] skills, learning from master craftsmen and experimenting with innovative techniques. Each piece is a testament to [his/her] dedication to excellence, blending traditional craftsmanship with modern sensibilities.
                    </p>
                    <p className="text-gray-700">
                        Today, [Business Name] stands as a symbol of quality, creativity, and the enduring value of handmade furniture. From the first sketch to the final polish, every item is crafted with care, ensuring that your home is not just furnished, but truly enriched.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Mission</h2>
                    <p className="text-gray-700 mb-4">
                        At [Business Name], our mission is to create furniture that inspires and endures. We believe in the power of thoughtful design, the beauty of natural materials, and the importance of craftsmanship. We are committed to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li><span className="font-semibold">Quality:</span> Using only the finest materials and time-honored techniques.</li>
                        <li><span className="font-semibold">Innovation:</span> Blending classic styles with contemporary needs.</li>
                        <li><span className="font-semibold">Sustainability:</span> Building pieces that last, reducing waste and promoting responsible sourcing.</li>
                        <li><span className="font-semibold">Customer Satisfaction:</span> Ensuring every interaction and every product exceeds expectations.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Products</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Service Trolleys – Perfect for entertaining and everyday convenience</li>
                        <li>Service Coffee Tables – Elegant and practical centerpieces for your living space</li>
                        <li>Fireplaces – Cozy and inviting focal points for any home</li>
                        <li>Side Tables – Versatile and stylish additions to your decor</li>
                        <li>Zigon Coffee Tables – Unique designs that make a statement</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">What Our Customers Say</h2>
                    <div className="space-y-6">
                        <blockquote className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                            <p className="text-gray-700">
                                "The service trolley I purchased from [Business Name] is not only beautiful but incredibly functional. It’s become the centerpiece of my dining room!"
                            </p>
                            <footer className="mt-2 text-sm text-gray-500">— [Customer Name], [Location]</footer>
                        </blockquote>
                        <blockquote className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                            <p className="text-gray-700">
                                "I was looking for a unique coffee table, and the Zigon design exceeded all my expectations. The craftsmanship is outstanding!"
                            </p>
                            <footer className="mt-2 text-sm text-gray-500">— [Customer Name], [Location]</footer>
                        </blockquote>
                        <blockquote className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                            <p className="text-gray-700">
                                "The fireplace transformed my living room into a warm, inviting space. I couldn’t be happier with the quality and service."
                            </p>
                            <footer className="mt-2 text-sm text-gray-500">— [Customer Name], [Location]</footer>
                        </blockquote>
                    </div>
                </section>
            </div>
        </div>
    )
}