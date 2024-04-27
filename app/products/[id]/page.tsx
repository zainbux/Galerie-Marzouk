import ImageGallery from '@/app/components/ImageGallery'
import React from 'react'
import { DiameterIcon, RulerIcon, Truck } from 'lucide-react'
import { calculateOriginalPrice, feetToCentimeters } from '@/app/utils/utils'
import { Details } from './Details'
import CategoryCarousel from '@/app/components/CategorySection/CategoryCarousel'
import FAQ from '@/app/components/FAQ'
import AddToBag from '@/app/components/AddToBag'
import CheckoutNow from '@/app/components/CheckoutNow'
import { getProduct } from '@/lib/api'


export const dynamic = "force-dynamic";

type Props = {
  params: {id:string}
}

export default async function page({ params }: Props) {

  const id = params.id

  const product = await getProduct(id);

  if (!product) {
    return <div>No product found</div>
  }


  return (
    <div className=" mt-20 mb-40">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">

        <div className="grid gap-8 md:grid-cols-2">
          
          <ImageGallery images={product.images} ThumbnailImage={product.ThumbnailImage} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.title}
              </h2>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${product.price}
                </span>
                <p className='text-red-900'>
                  <span className='line-through text-red-900'>${calculateOriginalPrice(product.price, product.discount)}</span> (-{product.discount}%)                       
                </p>
              </div>
              
            </div>

            <div className='mt-3 mb-7'>

              <div className="my-2 flex items-center gap-2 text-gray-500">  
                <RulerIcon className="w-6 h-6" />
                <span className="text-sm">
                  {product.length} x {product.width} ft / {feetToCentimeters(product.length)} x {feetToCentimeters(product.width)} cm
                </span>
              </div>

              <div className="my-2 flex items-center gap-2 text-gray-500">
                <Truck className="w-6 h-6" />
                <span className="text-sm">7-14 Day Shipping</span>
              </div>

            </div>

            <div className="flex gap-2.5">
            <AddToBag
              id={product.id}
              currency="CAD"
              description={product.description}
              image={product.images[0]}
              name={product.title}
              price={product.price}
              price_id={product.priceId}
            />

            {/* <CheckoutNow
              id={product.id}
              currency="CAD"
              description={product.description}
              image={product.images[0]}
              name={product.title}
              price={product.price}
              price_id={product.priceId}
              /> */}
            </div>
            
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {product.highlight}
            </p>

            
          </div>

        </div>

        <div className='mt-20 flex justify-center'>
          <Details description={product.description} />
        </div>

        <div className='my-8'>
          <h1 className='text-slate-900 md:text-3xl text-xl  text-center font-semibold p-5'> Related Products</h1>
          <CategoryCarousel category={product.category}/>
        </div>
        
      </div>

      <FAQ/>



    </div>
  );
}

