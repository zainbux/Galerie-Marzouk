import React from 'react'
import AllItems from './AllItems'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='p-10'>

      <div className='mb-20'>
        <h1 className=' text-3xl md:text-7xl text-center pt-7'>All Items</h1>
      </div>

      <AllItems/>

      

    </div>
  )
}

export default Page



// import React from 'react'
// import { Products } from '../constants'
// import ProductCard from '../components/ProductCard'

// type Props = {
  
// }

// const AllItems = (props: Props) => {
//   return (
//     <div className='flex gap-5 flex-wrap justify-center'>

//         {Products.map((product, idx) =>(

//             <ProductCard 
//             id={product.id}
//             name={product.name}
//             price={product.price} 
//             discount={product.discount} 
//             length={product.length} 
//             width={product.width} 
//             ThumbnailImage={product.ThumbnailImage} 
//             soldOut={product.soldOut}
            
//             />

//         ))}

//     </div>
//   )
// }

// export default AllItems

// //price discount length width thumbnail img