import Link from 'next/link';
import Image from 'next/image';

const ProductionSection = () => {
  return (
    <div className='flex-col justify-center' >

      <h1 className='text-3xl md:text-7xl text-center pt-7 my-10 font-bold'>Our Products</h1>

      <div className='justify-center mb-14 lg:flex lg:gap-5'>

        <div className='block lg:flex lg:gap-5'>

            <div className="mx-auto w-[80vw] h-[250px] my-10 lg:my-0 block lg:w-[20vw] lg:h-full relative rounded-xl overflow-hidden ">

            <Link href={`/Category/rugs`} >
                <Image
                    src={"/rugg.jpg"}
                    alt="image"
                    fill={true}
                    className='object-cover hover:opacity-80 hover:scale-110 ease-in duration-150 '
                />
                

                <div className='absolute bottom-0 w-full backdrop-brightness-50'>
                    <h1 className='text-white md:text-3xl text-xl font-semibold p-5'>
                        Vintage Rugs
                    </h1>
                </div>
            </Link>

            </div>     

            <div className="mx-auto w-[80vw] h-[250px] my-10 lg:my-0 block lg:w-[20vw] lg:h-full relative rounded-xl overflow-hidden ">

            <Link href={`/Category/poufs`} >
                <Image
                    src={"/poufs.jpg"}
                    alt="image"
                    fill={true}
                    className='object-cover hover:opacity-80 hover:scale-110 ease-in duration-150 '
                />
                

                <div className='absolute bottom-0 w-full backdrop-brightness-50'>
                    <h1 className='text-white md:text-3xl text-xl font-semibold p-5'>
                        Poufs
                    </h1>
                </div>
            </Link>

            </div>    

        </div>

        <div className='lg:grid lg:grid-cols-2 lg:gap-5'>

          <div className="mx-auto w-[80vw] h-[250px] my-10 lg:my-0 lg:w-full lg:col-span-2 block relative rounded-xl overflow-hidden">
            <Link href={`/Category/pillowsblankets`} >
              <Image
                src={"/cap.JPG"}
                alt="image"
                fill={true}
                className='object-cover hover:opacity-80 hover:scale-110 ease-in duration-150'
              />
              <div className='absolute bottom-0 w-full backdrop-brightness-50'>
                  <h1 className='text-white md:text-3xl text-xl font-semibold p-5'>
                     Pillows & Blankets
                  </h1>
              </div>
            </Link>
          </div>  

          <div className='block lg:flex lg:col-span-2 lg:gap-5'>

            <div className="mx-auto w-[80vw] h-[250px] my-10 lg:my-0 lg:w-[20vw] block relative rounded-xl overflow-hidden">
              <Link href={`/Category/lampsfixtures`} >
                <Image
                  src={"/laaamp.jpg"}
                  alt="image"
                  fill={true}
                  className='object-cover hover:opacity-80 hover:scale-110 ease-in duration-150'
                />
                <div className='absolute bottom-0 w-full backdrop-brightness-50'>
                    <h1 className='text-white md:text-3xl text-xl font-semibold p-5'>
                        Lamps & Fixtures
                    </h1>
                </div>
              </Link>
            </div>     

            <div className="mx-auto w-[80vw] h-[250px] my-10 lg:my-0 lg:w-[20vw] block relative rounded-xl overflow-hidden">
              <Link href={`/Category/other`} >
                <Image
                  src={"/other.jpg"}
                  alt="image"
                  fill={true}
                  className='object-cover hover:opacity-80 hover:scale-110 ease-in duration-150'
                />
                <div className='absolute bottom-0 w-full backdrop-brightness-50'>
                    <h1 className='text-white md:text-3xl text-xl font-semibold p-5'>
                        Other Decor
                    </h1>
                </div>
              </Link>
            </div>    

          </div>

        </div>

      </div>

  

    </div>

  );
};

export default ProductionSection;

