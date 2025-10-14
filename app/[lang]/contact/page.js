"use client";
import { useTranslations } from "next-intl"
import { useRef } from "react"
import emailjs from "emailjs-com";


export default function Contact() {
    const t = useTranslations("contact")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_caqysyj",   // senin EmailJS service ID
                "template_v58udna",  // senin EmailJS template ID
                form.current,
                "_M4xsORGfCzGjVNAd"  // senin EmailJS public key’in
            )
            .then(
                () => {
                    alert("✅ Başarıyla gönderildi!");
                    e.target.reset();
                },
                (error) => {
                    console.error("EmailJS error:", error);
                    alert("❌ Gönderim sırasında bir hata oluştu, lütfen tekrar dene.");
                }
            );
    };
    return (
        <div>
            <div className='w-full flex flex-col items-center gap-8 p-16'>
                <h1 className='text-3xl text-logo font-bold'>{t('title')}</h1>
                <p className='max-w-2xl text-logolight-900 text-center'>{t('subtitle')}</p>
                <div className="flex flex-row justify-center w-auto gap-4 flex-wrap whitespace-nowrap">
                    <a href="tel:+90 224 715 0 532" className='flex flex-col items-center gap-4 w-48'>
                        <div className='flex justify-center items-center text-center rounded-full bg-logolight-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>{t('options.phone')}</h2>
                        <span>+90 224 715 0 532</span>
                    </a>
                    <a href="https://wa.me/905425629933" className='flex flex-col items-center gap-4 w-48'>
                        <div className='flex justify-center items-center text-center rounded-full bg-logolight-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>WhatsApp</h2>
                        <span>+905425629933</span>
                    </a>
                    <a href="mailto:info@monteri.tr" className='flex flex-col items-center gap-4 w-48'>
                        <div className='flex justify-center items-center text-center rounded-full bg-logolight-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>{t('options.email')}</h2>
                        <span className="text-center truncate">info@monteri.tr</span>
                    </a>
                    <a href="https://www.facebook.com/monterisofas/" className='flex flex-col items-center gap-4 w-48'>
                        <div className='flex justify-center items-center text-center rounded-full bg-logolight-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
                            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                        </div>
                        <h2 className='text-lg tracking-wide font-semibold'>Facebook</h2>
                        <span>Monteri Sofa</span>
                    </a>
                    <a href="https://www.instagram.com/monteri.tr/" className='flex flex-col items-center gap-4 w-48'>
                        <div className='flex justify-center items-center text-center rounded-full bg-logolight-800 text-white shadow-lg hover:scale-110 transition-transform duration-200 h-25 w-25'>
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
                        <h2 className="text-2xl font-bold text-logo">{t('form.title')}</h2>
                        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-lg">
                            <div className="mb-4">
                                <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="name">
                                    {t('form.name')}
                                </label>
                                <input name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="email">
                                    {t('form.email')}
                                </label>
                                <input name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="message">
                                    {t('form.message')}
                                </label>
                                <textarea name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-logolight-900 hover:bg-logolight-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    {t('form.submit_button')}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div id="map" className="w-full md:w-1/2 p-4" style={{ height: "400px" }}>
                        <p>{t('address_section.title')}:</p>
                        <div className="mb-4">
                            <a target="_blank"
                                href="https://www.google.com/maps/place/Mahmudiye,+%C3%96zlem+Sk.+No:3,+16400+%C4%B0neg%C3%B6l%2FBursa/@40.0761209,29.5244964,17z/data=!3m1!4b1!4m6!3m5!1s0x14cbc9423c1c73e5:0xf16c89d01e4efd5a!8m2!3d40.0761209!4d29.5270767!16s%2Fg%2F11cscmw76q?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                                className="text-sm text-logolight-700 mb-2">Mahmudiye Mahallesi, Özlem Sokak No:3, Inegol 16400</a>
                        </div>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mahmudiye%20Mahallesi,%20%C3%96zlem%20Sokak%20No:3,%20Inegol%2016400+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full mb-4"
                            style={{ border: 0, height: "100%" }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}   