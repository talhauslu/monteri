import ProductCard from "@/components/Card";
import { useTranslations } from "next-intl";

export default function Products() {
    const t = useTranslations("products");
    const products = [
        { img: "ASOS/1.JPG", name: "ASOS" },
        { img: "BOHO SEHPA SET/1.png", name: "BOHO" },
        { img: "BONA/1.png", name: "BONA" },
        { img: "COLORIUM SEHPA SET/1.png", name: "COLORIUM" },
        { img: "EXCOTİC SEHPA SET/1.png", name: "EXCOTIC" },
        { img: "HARMONY/1.png", name: "HARMONY" },
        { img: "JUPITER/1.jpg", name: "JUPITER" },
        { img: "LOTUS SEHPA BOYALI/1.jpg", name: "LOTUS V1" },
        { img: "LOTUS KAPLAMA/1.jpg", name: "LOTUS V2" },
        { img: "LOTUS TRAVERTEN/1.png", name: "LOTUS V3" },
        { img: "LUNA BOYALI SEHPA SET/1.png", name: "LUNA V1" },
        { img: "LUNA SEHPA SET/1.png", name: "LUNA V2" },
        { img: "MATRİX/1.png", name: "MATRIX" },
        { img: "MATRIX BOYALI/1.png", name: "MATRIX COLORED" },
        { img: "MİLANO/1.jpg", name: "MILANO" },
        { img: "MONO/1.png", name: "MONO" },
        { img: "OSLO/1.jpg", name: "OSLO" },
        { img: "PIETRA SEHPA SETİ/1.jpg", name: "PIETRA" },
        { img: "RAMSES/1.jpg", name: "RAMSES" },
        { img: "ROYAL/1.png", name: "ROYAL" },
        { img: "TOKYO SEHPA/1.jpg", name: "TOKYO" },
        { img: "TRAVE/1.jpg", name: "TRAVE" },
        { img: "TRİO SET/1.png", name: "TRIO" },
        { img: "TUMBA/1.jpg", name: "TUMBA" },
    ];

    return (
        <div className="w-full flex justify-center items-center bg-gray-50">
            <div className="w-full">
                <div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8 bg-white transition-all duration-1000 opacity-0 animate-fadeIn overflow-x-auto"
                >
                    {products.map((product, index) => (
                        <ProductCard key={index} img={product.img} name={product.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}