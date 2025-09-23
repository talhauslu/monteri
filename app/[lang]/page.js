import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('header');

  return (
    <div>
      <div className='hero-vid'>
        <video autoPlay loop muted className='absolute w-full h-full object-cover'>
          <source src='/videos/slider-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* <div className='top-0 left-0 w-full h-full bg-black opacity-50'></div> */}
      </div>
      <div className='placeholder flex flex-col items-center justify-center min-h-screen'>
      </div>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold mb-6'>{t('title')}</h1>
      </div>
    </div>
  );
}