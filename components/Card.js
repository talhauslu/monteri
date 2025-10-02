import Image from 'next/image';

export default function ProductCard({ img, name }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
         style={{ aspectRatio: '1600 / 1035', minHeight: 0 }}>
      <Image
        src={`/images/${img}`}
        alt={name}
        width={1600}
        height={1035}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full px-6 py-4 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 95%)'
        }}
      >
        <h2 className="text-2xl font-semibold text-white drop-shadow">{name}</h2>
      </div>
    </div>
  );
}
