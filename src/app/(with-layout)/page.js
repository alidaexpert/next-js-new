
import { Suspense } from 'react'
import HomePage from '../Component/HomePage/HomePage'
import ProductListing from '../Component/HomePage/ProductListing'


export default function Home() {
  return (
    <main className=''>
      <div className=''>
        <HomePage/>
        <Suspense fallback={ <p className=' text-center block text-3xl ' >Loading...</p>}>
        <ProductListing></ProductListing>
        </Suspense>
        
      </div>
    </main>
  )
}
