"use client";
import { notFound } from "next/navigation";
import { use } from "react";
import { useEffect } from "react";
import productsData from "@/data/productsDetailed.json";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslations } from "next-intl";


export default function ProductDetailPage({ params }) {
  const t = useTranslations("product_details");
  const { detail } = use(params);
  const product = productsData.find((p) => p.slug === detail);
  const galleryItems = product.images.map((img) => ({
    original: img,
    thumbnail: img
  }));

  useEffect(() => {
    // disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // disable image dragging
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") e.preventDefault();
    };
    document.addEventListener("dragstart", handleDragStart);

    // optional: disable certain key combos (Ctrl+S / Ctrl+U)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // cleanup on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white p-4 md:p-8">

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Images Gallery */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
          <ImageGallery
            items={galleryItems}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={true}
            lazyLoad={true}
            thumbnailPosition="bottom"
          />
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
          >
            <span
              style={{
                transform: "rotate(-20deg)",
                whiteSpace: "nowrap",
              }}
            >
              <Image src="/images/logo.png" alt="Logo" className="w-30 sm:w-60 h-auto opacity-15 select-none" width={400} height={200} />
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">

          {/* Title */}
          <h1 className="text-3xl text-logo md:text-4xl font-semibold text-center mb-6">{product.name}</h1>

          {/* Description */}
          <p className="text-logolight-800 text-lg mb-6 italic text-center">{product.description}</p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-col gap-6 mb-10">
              {product.sizes.map((item, index) => {
                // "90 x 60 x 45" → ["90", "60", "45"]
                const [width, depth, height] = item.size.split("x").map(v => v.trim());

                return (
                  <div
                    key={index}
                    className="flex items-center border-2 border-logolight-600 rounded-lg max-w-2xl mx-auto"
                  >
                    {/* Left Vertical Label */}
                    <div
                      className="bg-logolight-600 text-white font-light text-sm tracking-wider px-2 py-2 rounded-lg -ml-4 -my-4"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {item.type.toUpperCase()}
                    </div>

                    {/* Dimensions Section */}
                    <div className="flex flex-1 justify-around items-center pl-7 pr-3">
                      <div className="text-center">
                        <div className="text-lg font-light mb-1">{t("dimensions.width")}</div>
                        <div className="text-xl font-light"><span className={rubik.className}>{width}</span> CM</div>
                      </div>

                      <hr className="rotate-90 w-10" />

                      <div className="text-center">
                        <div className="text-lg font-light mb-1">{t("dimensions.depth")}</div>
                        <div className="text-xl font-light"><span className={rubik.className}>{depth}</span> CM</div>
                      </div>

                      <hr className="rotate-90 w-10" />

                      <div className="text-center">
                        <div className="text-lg font-light mb-1">{t("dimensions.height")}</div>
                        <div className="text-xl font-light"><span className={rubik.className}>{height}</span> CM</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}


          {/* Contact*/}
          <div className="mt-6 flex flex-col items-center gap-4">
            <h2 className="text-xl text-logo font-medium mb-2">{t("inquire")}</h2>
            <a href={`https://wa.me/905425629933?text=I'm%20interested%20in%20the%20${product.name}%20product.`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <i className="fa fa-whatsapp fa-2x mr-2" aria-hidden="true"></i>
              {t("whatsapp_button")}
            </a>
          </div>

          <div className="mt-6 mb-6 flex flex-col items-center gap-4">
            <a href={`mailto:info@monteri.com?subject=About%20your%20product&body=I%20am%20interested%20in%20the%20${product.name}%20product.`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <i className="fa fa-envelope-o fa-2x mr-2" aria-hidden="true"></i>
              {t("email_button")}
            </a>
          </div>



        </div>
      </div>
    </div>
  );
}
