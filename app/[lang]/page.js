import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';

export default function HomePage() {
  const t = useTranslations('home');

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
        <section className="py-16 px-4 bg-gradient-to-b from-stone-0 to-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('main_value_section.title_first_part')} <span className="text-stone-700">{t('main_value_section.title_second_part')}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('main_value_section.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <i className="fa fa-paint-brush fa-2x" aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('main_value_section.values.craftsmanship.title')}</h3>
                <p className="text-gray-600">{t('main_value_section.values.craftsmanship.description')}</p>
              </div>

              <div className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <i className="fa fa-truck fa-2x" aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('main_value_section.values.shipping.title')}</h3>
                <p className="text-gray-600">{t('main_value_section.values.shipping.description')}</p>
              </div>

              <div className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <i className="fa fa-diamond fa-2x" aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('main_value_section.values.quality.title')}</h3>
                <p className="text-gray-600">{t('main_value_section.values.quality.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('featured_products_section.title')}</h2>
              <p className="text-lg text-gray-600">{t('featured_products_section.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: t('featured_products_section.categories.tables.title'), desc: t('featured_products_section.categories.tables.description'), imgSrc: "/images/ASOS/1.JPG" },
                { name: t('featured_products_section.categories.coffee_tables.title'), desc: t('featured_products_section.categories.coffee_tables.description'), imgSrc: "/images/LUNA SEHPA SET/4.JPG" },
                { name: t('featured_products_section.categories.side_tables.title'), desc: t('featured_products_section.categories.side_tables.description'), imgSrc: "/images/MİLANO/11.jpg" },
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
                <button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto duration-130 hover:-translate-y-0.5 cursor-pointer">
                  {t('featured_products_section.view_all_button')}
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('why_choose_us_section.title')}</h2>
                <div className="space-y-4">
                  {[
                    { text: t('why_choose_us_section.points.check1') },
                    { text: t('why_choose_us_section.points.check2') },
                    { text: t('why_choose_us_section.points.check3') },
                    { text: t('why_choose_us_section.points.check4') },
                    { text: t('why_choose_us_section.points.check5') },
                    { text: t('why_choose_us_section.points.check6') }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <i className="fa fa-check-square-o fa-2x w-6 h-6 text-stone-600 flex-shrink-0" />
                      <span className="text-gray-700 ">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-stone-200 to-stone-50 p-8 rounded-2xl">
                <div className="text-center">
                  {/* <div className="text-6xl mb-4">🏆</div> */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('why_choose_us_section.side_title')}</h3>
                  <p className="text-gray-600 mb-6">
                    {t('why_choose_us_section.side_description')}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-stone-600">100%</div>
                      <div className="text-sm text-gray-600">{t('why_choose_us_section.side_stats.quality_tested')}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-2xl font-bold text-stone-600">5+</div>
                      <div className="text-sm text-gray-600">{t('why_choose_us_section.side_stats.countries_served')}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('shipping_services_section.title')}</h2>
              <p className="text-lg text-gray-600">{t('shipping_services_section.description')}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-globe fa-2x text-blue-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">{t('shipping_services_section.services.worldwide_shipping.title')}</h3>
                <p className="text-sm text-gray-600">{t('shipping_services_section.services.worldwide_shipping.description')}</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-shopping-cart fa-2x text-red-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">{t('shipping_services_section.services.secure_packaging.title')}</h3>
                <p className="text-sm text-gray-600">{t('shipping_services_section.services.secure_packaging.description')}</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-star fa-2x text-purple-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">{t('shipping_services_section.services.tracking.title')}</h3>
                <p className="text-sm text-gray-600">{t('shipping_services_section.services.tracking.description')}</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-leaf fa-2x text-green-500" aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold mb-2">{t('shipping_services_section.services.customer_support.title')}</h3>
                <p className="text-sm text-gray-600">{t('shipping_services_section.services.customer_support.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Preview */}
        <section className="py-16 px-4 bg-gradient-to-b from-stone-700 to-stone-100 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('testimonials_section.title')}</h2>
            <div className="bg-black/10 backdrop-blur-sm rounded-xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star fa-2x text-yellow-500" aria-hidden="true"></i>
                ))}
              </div>
              <blockquote className="text-xl italic mb-4">
                &quot;{t('testimonials_section.feedback')}&quot;
              </blockquote>
              <div className="text-stone-800 font-semibold">— Oğuz P.</div>
            </div>
            <Link href="/about">
              <button className="mt-8 bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-130 hover:-translate-y-0.5 cursor-pointer">
                {t('testimonials_section.read_more_button')}
              </button>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('call_to_action_section.title')}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('call_to_action_section.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-130 hover:-translate-y-0.5 cursor-pointer">
                  {t('call_to_action_section.browse_button')}
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-130 hover:-translate-y-0.5 cursor-pointer">
                  {t('call_to_action_section.contact_button')}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}