export default function Bayilik() {
    return (
        <div className="w-full flex flex-col items-center gap-8 p-8 md:p-16 bg-white">
            <div className="text-center">
                <h1 className='text-3xl text-logo font-bold'>Bayilik Formu</h1>
                <p className='mt-4 max-w-2xl text-logolight-900'>
                    Bayilik başvurusu yapmak için lütfen müşteri formunu doldurun. Başvurunuzu inceledikten sonra en kısa sürede sizinle iletişime geçeceğiz ve işbirliğimiz için gerekli adımları birlikte atacağız.
                </p>
            </div>

            <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Adınız */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="firstName">Adınız</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="Adınız" />
                    </div>

                    {/* Soyadınız */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="lastName">Soyadınız</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Soyadınız" />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email adresiniz" />
                    </div>

                    {/* Telefon Numaranız */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="phone">Telefon Numaranız</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Telefon numaranız" />
                    </div>

                    {/* Ünvan */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="title">Ünvan</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Firma ünvanı" />
                    </div>

                    {/* Metrekare */}
                    <div className="mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="sqm">Metrekare</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="sqm" type="number" placeholder="Mağaza metrekaresi" />
                    </div>

                    {/* Adres Bilgileri (Ülke, Şehir, İlçe) - Bu alanları ihtiyaca göre ayırabilirsiniz */}
                    <div className="md:col-span-2 mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="address">Adres (Ülke, Şehir, İlçe)</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Örn: Türkiye, Bursa, İnegöl" />
                    </div>

                    {/* Mesajınız */}
                    <div className="md:col-span-2 mb-4">
                        <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="message">Mesajınız</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Eklemek istediğiniz notlar..."></textarea>
                    </div>

                    {/* Submit Butonu */}
                    <div className="md:col-span-2 flex items-center justify-end">
                        <button className="bg-logolight-900 hover:bg-logolight-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Başvuruyu Gönder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}