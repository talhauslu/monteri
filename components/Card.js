export default function ProductCard({ img, name }) {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <img
                src={`/images/${img}`}
                alt={name}
                className="w-full h-full object-cover min-h-[200px] max-h-[400px] transition-transform duration-500 group-hover:scale-110"
                style={{ display: 'block' }}
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
    )
}