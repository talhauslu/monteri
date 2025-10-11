"use client";
import { notFound } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import productsData from "@/data/productsDetailed.json";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";


export default function ProductDetailPage({ params }) {
  const { detail } = use(params);
  const product = productsData.find((p) => p.slug === detail);
  const galleryItems = product.images.map((img) => ({
    original: img,
    thumbnail: img
  }));

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white p-4 md:p-8">

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Images Gallery */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <ImageGallery
            items={galleryItems}
            showPlayButton={false}
            showFullscreenButton={true}
            showIndex={true}
            lazyLoad={true}
            thumbnailPosition="bottom"
          />
        </div>

        {/* Description & Sizes */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">{product.name}</h1>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-16 italic text-center">{product.description}</p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-medium ">Technical Dimentions</h2>
              <h3 className="mb-2 text-center font-thin">(Width x Depth x Height)</h3>
                {product.sizes.map((sizes, index) => (
                  <p className="text-center mb-1" key={index}><span className="font-medium">{sizes.type}</span>: <span className="font-normal">{sizes.size}</span> cm</p>
                ))}
            </div>
          )}

          {/* Contact Button */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <h2 className="text-xl font-medium mb-2">Inquire About This Product</h2>
            <a href={`https://wa.me/905425629933?text=I'm%20interested%20in%20the%20${product.name}%20product.`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <i className="fa fa-whatsapp fa-2x mr-2" aria-hidden="true"></i>
              Contact via WhatsApp
            </a>
          </div>

          <div className="mt-6 mb-10 flex flex-col items-center gap-4">
            <a href={`mailto:info@monteri.com?subject=About%20a%20product&body=i%20am%20interested%20in%20the%20${product.name}%20product.`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <i className="fa fa-envelope-o fa-2x mr-2" aria-hidden="true"></i>
              Contact via Mail
            </a>
          </div>



        </div>
      </div>
    </div>
  );
}
