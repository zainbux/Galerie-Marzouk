
import React from 'react';
import ReviewCard from './ReviewCard';
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { getReviews } from '@/lib/api';
  
  type Props = {
    reviews:any
  }


  export default async function ReviewSection(props:Props) {

    const reviews = await getReviews();

  // const plugin = React.useRef(
  //   Autoplay({ delay: 1000, stopOnInteraction: false })
  // )

  return (
    <div className=" justify-center my-40 mx-20 md:mx-36">      

        <h1 className='font-bold text-3xl md:text-7xl text-center my-10'>What they say about us?</h1>
        
        <Carousel className="w-full md:w-[80vw]"
        
        // plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        
        >
        <CarouselContent className="-ml-1">

            {reviews.map((review, idx) => (

            <CarouselItem key={idx} className="px-5 basis-full md:basis-auto  ">

                <ReviewCard
                    date={review.date}
                    productName={review.productName}
                    customerName={review.customerName}
                    description={review.description}
                />
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

  </div>
  );
};

