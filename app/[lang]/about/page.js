import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("about");

    const missionPoints = [
        { icon: "diamond", title: t('mission_section.values.quality.title'), desc: t('mission_section.values.quality.description') },
        { icon: "lightbulb-o", title: t('mission_section.values.innovation.title'), desc: t('mission_section.values.innovation.description') },
        { icon: "leaf", title: t('mission_section.values.sustainability.title'), desc: t('mission_section.values.sustainability.description') },
        { icon: "star", title: t('mission_section.values.customer_focus.title'), desc: t('mission_section.values.customer_focus.description') }
    ];

    const products = [
        { name: t('products_section.categories.tables.title'), desc: t('products_section.categories.tables.description') },
        { name: t('products_section.categories.coffee_tables.title'), desc: t('products_section.categories.coffee_tables.description') },
        { name: t('products_section.categories.side_tables.title'), desc: t('products_section.categories.side_tables.description') },
        // { name: t('products_section.categories.zigon_tables.title'), desc: t('products_section.categories.zigon_tables.description') },
        // { name: t('products_section.categories.service_trolleys.title'), desc: t('products_section.categories.service_trolleys.description') }
    ];

    const testimonials = [
        {
            text: t('testimonials_section.feedback1'),
            author: "Stefan K.",
            location: "Frankfurt, Germany"
        },
        {
            text: t('testimonials_section.feedback2'),
            author: "Oğuz P.",
            location: "Bursa, Turkey"
        },
        {
            text: t('testimonials_section.feedback3'),
            author: "Metin U.",
            location: "Istanbul, Turkey"
        },
        {
            text: t('testimonials_section.feedback4'),
            author: "Nur K.",
            location: "Istanbul, Turkey"
        },
        {
            text: t('testimonials_section.feedback5'),
            author: "Ana M.",
            location: "Tbilisi, Georgia"
        },
        {
            text: t('testimonials_section.feedback6'),
            author: "Batuhan M.",
            location: "Edirne, Turkey"
        }
    ];

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50">
                {/* Hero Section */}
                <div className="mt-8 sm:mt-0 bg-gradient-to-r from-logo to-logodark-100 text-white py-16">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('title')}</h1>
                        <p className="text-2xl md:text-xl opacity-90 max-w-3xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Quote Section */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-logolight-100 p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute top-4 left-4 opacity-10">
                            <i className="fa fa-quote-right fa-4x" aria-hidden="true"></i>
                        </div>
                        <blockquote className="relative">
                            <p className="text-xl md:text-2xl font-light text-logolight-700 italic text-center leading-relaxed mb-6">
                                {t('quote_section.quote')}
                            </p>
                            <footer className="text-center">
                                <span className="text-md font-semibold text-logolight-800">— Bahadır Daylan</span>
                                <p className="text-sm text-logolight-500 mt-1">{t('quote_section.role')}</p>
                            </footer>
                        </blockquote>
                    </div>

                    {/* Our Story Section */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <h2 className="text-3xl font-bold text-logo">{t('story_section.title')}</h2>
                                </div>
                                <h3 className="text-xl font-semibold text-logolight-800 mb-4">{t('story_section.subtitle')}</h3>
                                <div className="space-y-4 text-logolight-800 leading-relaxed">
                                    <p className="indent-3">{t('story_section.description_paragraph1')}</p>
                                    <p className="indent-3">{t('story_section.description_paragraph2')}</p>
                                    <p className="indent-3">{t('story_section.description_paragraph3')}</p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-logolight-100 to-logolight-100 rounded-2xl p-8">
                                <div className="text-center">
                                    <i className="fa fa-globe fa-5x text-logolight-800 mb-4" aria-hidden="true"></i>
                                    <h4 className="text-lg font-semibold text-logo mb-4">{t('story_section.side_title')}</h4>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-2xl font-bold text-logolight-800">8+</div>
                                            <div className="text-sm text-logolight-800">{t('story_section.side_stats.years_experience')}</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-2xl font-bold text-logolight-800">100+</div>
                                            <div className="text-sm text-logolight-800">{t('story_section.side_stats.happy_homes')}</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-2xl font-bold text-logolight-800">5+</div>
                                            <div className="text-sm text-logolight-800">{t('story_section.side_stats.countries')}</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-2xl font-bold text-logolight-800">100%</div>
                                            <div className="text-sm text-logolight-800">{t('story_section.side_stats.handcrafted')}</div>
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
                                {/* <Globe className="w-8 h-8 text-stone-600 mr-3" /> */}
                                <h2 className="text-3xl font-bold text-logo">{t('mission_section.title')}</h2>
                            </div>
                            <p className="text-lg text-logolight-800 max-w-3xl mx-auto">
                                {t('mission_section.mission_statement')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {missionPoints.map((point, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                                    <div className="bg-gradient-to-br from-stone-100 to-neutral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <i className={`fa fa-${point.icon} fa-2x w-8 h-8 text-logolight-800`} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-logolight-900 mb-2">{point.title}</h3>
                                    <p className="text-logolight-700 text-sm">{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Products Section */}
                    <section className="mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-logo mb-4">{t('products_section.title')}</h2>
                                <p className="text-lg text-logolight-700">{t('products_section.subtitle')}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product, index) => (
                                    <div key={index} className="group hover:bg-logolight-100 rounded-xl p-6 transition-colors cursor-pointer">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-stone-100 rounded-lg p-3">
                                                <i className="fa fa-arrow-right fa-2x text-logolight-800" aria-hidden="true"></i>
                                                {/* <product.icon className="w-6 h-6 text-stone-600" /> */}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-md font-semibold text-logolight-900 mb-1">{product.name}</h3>
                                                <p className="text-logolight-700 text-sm">{product.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="mb-16">
                        <div className="bg-gradient-to-r from-logo to-logodark-100 rounded-2xl p-8 md:p-12 text-white">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold mb-4">{t('commitment_section.title')}</h2>
                                <p className="text-lg opacity-90">{t('commitment_section.subtitle')}</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <i className="fa fa-shield fa-3x text-logolight-200 mx-auto mb-4" aria-hidden="true"></i>
                                    <h3 className="text-lg font-semibold mb-2">{t('commitment_section.points.quality_assurance.title')}</h3>
                                    <p className="opacity-90">{t('commitment_section.points.quality_assurance.description')}</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-globe fa-3x text-logolight-200 mx-auto mb-4" aria-hidden="true"></i>
                                    <h3 className="text-lg font-semibold mb-2">{t('commitment_section.points.global_reach.title')}</h3>
                                    <p className="opacity-90">{t('commitment_section.points.global_reach.description')}</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-heart fa-3x text-logolight-200 mx-auto mb-4" aria-hidden="true"></i>
                                    <h3 className="text-lg font-semibold mb-2">{t('commitment_section.points.customer_first.title')}</h3>
                                    <p className="opacity-90">{t('commitment_section.points.customer_first.description')}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-logo mb-4">{t('testimonials_section.title')}</h2>
                            <p className="text-lg text-logolight-700">{t('testimonials_section.subtitle')}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fa fa-star text-yellow-500" aria-hidden="true"></i>
                                        ))}
                                    </div>
                                    <blockquote className="text-logolight-800 mb-4 italic">
                                        &quot;{testimonial.text}&quot;
                                    </blockquote>
                                    <footer className="text-center">
                                        <p className="font-semibold text-logolight-800">{testimonial.author}</p>
                                        <p className="text-sm text-logolight-600">{testimonial.location}</p>
                                    </footer>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-logo to-logodark-100 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">{t('call_to_action_section.title')}</h3>
                            <p className="text-lg mb-6 opacity-90">{t('call_to_action_section.subtitle')}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/products">
                                    <button className="bg-white text-logolight-900 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-130 hover:-translate-y-0.5 cursor-pointer">
                                        {t('call_to_action_section.view_products_button')}
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-logolight-800 transition-colors duration-130 hover:-translate-y-0.5 cursor-pointer">
                                        {t('call_to_action_section.contact_button')}
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