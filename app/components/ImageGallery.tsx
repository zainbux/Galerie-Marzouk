"use client";

import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  images: string[];
  ThumbnailImage:string
}

export const dynamic = "force-dynamic";

export default function ImageGallery({ images, ThumbnailImage }: iAppProps) {

  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (

    <div className="grid gap-4 lg:grid-cols-5">
      
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images && images.length > 0 && images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100 border">
            <Image
              src={image}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer hover:opacity-[60%]"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 border">
        {bigImage && (
          <Image
            src={bigImage}
            alt="Photo"
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        )}

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
