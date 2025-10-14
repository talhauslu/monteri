import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Catalogs() {
    const t = useTranslations("catalogs");
    const catalogUrl = '/catalogs/catalog-1.pdf';
    const catalogCoverUrl = '/images/catalog-1.jpg';

    return (
        <div className="w-full flex items-center justify-center p-8 md:p-16 bg-gray-50" style={{ minHeight: 'calc(100vh - 250px)' }}>
            <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16">
                {/* Left: Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                    <h1 className='text-3xl lg:text-4xl text-logo font-bold mb-4'>{t('title')}</h1>
                    <p className='text-lg text-logolight-800 mb-10 max-w-lg'>
                        {t('subtitle')}</p>
                    <Link
                        href={catalogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-logolight-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-logolight-700 transition-colors duration-300 ease-in-out transform hover:-translate-y-0.5"
                    >
                        {t('buton')}
                    </Link>
                </div>
                
                {/* Right: Catalog Image */}
                <Link
                    href={catalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-1/2 flex justify-center group"
                >
                    <Image
                        src={catalogCoverUrl}
                        alt="Monteri Katalog Kapağı"
                        width={400}
                        height={565}
                        className="w-auto h-auto max-w-xs md:max-w-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1"
                        priority
                    />
                </Link>
            </div>
        </div>
    )
}