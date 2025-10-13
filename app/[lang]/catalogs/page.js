export default function Catalogs() {
    // NOT: Kataloğunuzu public/catalogs/ altına ekledikten sonra dosya adını burada güncelleyebilirsiniz.
    const catalogUrl = '/catalogs/catalog-1.pdf';

    return (
        <div className="w-full flex flex-col items-center justify-center gap-8 p-8 md:p-16 bg-gray-50" style={{ minHeight: 'calc(100vh - 250px)' }}>
            <div className="text-center max-w-3xl">
                <h1 className='text-4xl text-logo font-bold mb-4'>Kataloglarımızı Keşfedin</h1>
                <p className='text-lg text-logolight-800 mb-8'>
                    En yeni koleksiyonlarımızı ve zamansız tasarımlarımızı görmek için güncel kataloğumuzu indirin. Monteri'nin ilham veren dünyasına daha yakından bakın.
                </p>
                <a
                    href={catalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-logolight-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-logolight-700 transition-colors duration-300 ease-in-out transform hover:-translate-y-0.5"
                >
                    Kataloğu Görüntüle
                </a>
            </div>
        </div>
    )
}