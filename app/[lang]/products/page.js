import ProductCard from "@/components/Card";
import { useTranslations } from "next-intl";

export default function Products() {
    const t = useTranslations("products");
    const products = [
        { img: "0205202568154a16bca0a-1200x921.jpeg", name: t("product1") },
        { img: "0205202568154aa565a5d.jpeg", name: t("product2") },
        { img: "0205202568154b6405cd5-1200x1291.jpeg", name: t("product3") },
        { img: "0205202568154bd0a3e71.jpeg", name: t("product4") },
        { img: "0205202568154d5bab255.jpeg", name: t("product5") },
        { img: "0205202568154d8835629-1200x1290.jpeg", name: t("product6") },
        { img: "0205202568154dcebd0f0.jpeg", name: t("product7") },
        { img: "0205202568154ddcbd825-1200x800.jpeg", name: t("product8") },
        { img: "0205202568154e8b9576e-1200x1290.jpeg", name: t("product9") },
        { img: "0205202568154e422520d.jpeg", name: t("product10") },
        { img: "0205202568154ed4695c5-1200x800.jpeg", name: t("product11") },
        { img: "0205202568154ee259ed7-1200x800.jpeg", name: t("product12") },
        { img: "0205202568154f32d0dce.jpeg", name: t("product13") },
        { img: "0205202568154fb8c83c7.jpeg", name: t("product14") },
        { img: "0205202568154fb8c83c7-1200x800.jpeg", name: t("product15") },
        { img: "020520256815524fdea25-1200x864.jpeg", name: t("product16") },
        { img: "02052025681553781a0b5-1200x800.jpeg", name: t("product17") },
        { img: "020520256815527352a22-1200x1291.jpeg", name: t("product18") },
        { img: "020520256815528407e21-1200x1290.jpeg", name: t("product19") },
        { img: "d73442b9-ee23-45f4-8cd2-d8018b0c33e1_size750x750_cropTop.webp", name: t("product20") },
    ];

    return (
        <div className="w-full flex justify-center items-center p-4 bg-gray-50">
            <div className="w-full max-w-7xl mx-auto">
                <div
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 bg-white transition-all duration-1000 opacity-0 animate-fadeIn overflow-x-auto"
                >
                    {products.map((product, index) => (
                        <ProductCard key={index} img={product.img} name={product.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}