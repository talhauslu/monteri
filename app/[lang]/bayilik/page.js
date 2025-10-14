import { useTranslations } from "next-intl";


export default function Bayilik() {
    const t = useTranslations("bayilikler");
    return (
        <div className="w-full flex flex-col items-center gap-8 p-8 md:p-16 bg-white">
            <div className="text-center">
                <h1 className='text-3xl text-logo font-bold'>{t('title')}</h1>
                <p className='mt-4 max-w-2xl text-logolight-900'>
                    {t('subtitle')}
                </p>
            </div>

            <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Adınız */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="firstName">{t('form.name')}</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder={t('form.name')} />
                    </div>

                    {/* Soyadınız */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="lastName">{t('form.lastname')}</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder={t('form.lastname')} />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="email">{t('form.email')}</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder={t('form.email')} />
                    </div>

                    {/* Telefon Numaranız */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="phone">{t('form.phone')}</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder={t('form.phone')} />
                    </div>

                    {/* Ünvan */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="title">{t('form.unvan')}</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder={t('form.unvan')} />
                    </div>

                    {/* Metrekare */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="sqm">{t('form.m2')}</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="sqm" type="number" placeholder={t('form.m2')} />
                    </div>

                    {/* Adres Bilgileri (Ülke, Şehir, İlçe) - Bu alanları ihtiyaca göre ayırabilirsiniz */}
                    <div className="md:col-span-2 mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="address">{t('form.address')}</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder={t('form.address')} />
                    </div>

                    {/* Mesajınız */}
                    <div className="md:col-span-2 mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="message">{t('form.message')}</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder={t('form.message')}></textarea>
                    </div>

                    {/* Submit Butonu */}
                    <div className="md:col-span-2 flex items-center justify-end">
                        <button className="bg-logolight-900 hover:bg-logolight-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            {t('form.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}