export default function Contact() {
    return (
        <div>
            <div className='w-full flex flex-col items-center gap-8 p-16'>
                <h1 className='text-4xl text-green-800 font-bold'>Contact Us</h1>
                <p className='max-w-2xl text-center'>
                    We&apos;d love to hear from you! Whether you have questions about our products, need assistance, or want to provide feedback, feel free to reach out. You can contact us via:</p>
                <div className="flex flex-row justify-center w-auto gap-6 flex-wrap whitespace-nowrap">
                    <a href="tel:+905425629933" className='flex flex-col items-center gap-4 flex-1'>
                        <div className='flex justify-center items-center text-center rounded-full bg-green-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>Phone</h2>
                        <span>+905425629933</span>
                    </a>
                    <a href="https://wa.me/905425629933" className='flex flex-col items-center gap-4 flex-1'>
                        <div className='flex justify-center items-center text-center rounded-full bg-green-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>WhatsApp</h2>
                        <span>+905425629933</span>
                    </a><a href="https://www.facebook.com/monterisofas/" className='flex flex-col items-center gap-4 flex-1'>
                        <div className='flex justify-center items-center text-center rounded-full bg-green-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>Facebook</h2>
                        <span>Monteri Sofa</span>
                    </a><a href="https://www.instagram.com/monteri.tr/" className='flex flex-col items-center gap-4 flex-1'>
                        <div className='flex justify-center items-center text-center rounded-full bg-green-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>Instagram</h2>
                        <span>monteri.tr</span>
                    </a>
                </div>
            </div>
            <div className="w-full flex justify-center items-center p-4 mb-6">
                <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-center p-4 bg-white shadow-lg border overflow-hidden">
                    <div id="contact-form" className="w-full md:w-1/2 p-4">
                        <h2 className="text-3xl font-bold text-green-800">Get in Touch</h2>
                        <form className="w-full max-w-lg bg-white p-8 rounded-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div id="map" className="w-full md:w-1/2 p-4" style={{ height: "400px" }}>
                        <p>Our Location:</p>
                        <p className="text-sm text-gray-700 mb-2">Mahmudiye Mahallesi, Özlem Sokak No:3, Inegol 16400</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!3m2!1str!2str!4v1758466730968!5m2!1str!2str!6m8!1m7!1sAprKR31CTr74p0q7sYVYwQ!2m2!1d40.07616855825053!2d29.52700619736716!3f91.6156874793156!4f6.387816218889611!5f0.7820865974627469"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                             style={{ border: 0, height: "100%" }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}   