import React from 'react'
import Hero from '@/components/Hero'
import Airmax from '@/components/Airmax'
import Featured from '@/components/Featured'
import Products from '@/components/Products'
import Dontmiss from '@/components/Dontmiss'
import Essentials from '@/components/Essentials'
import Names from '@/components/Names'
import ProductCards from '@/components/Products/page'
const page = () => {
  return (
    <div>
    <Hero />
    <Airmax />
    <Featured />
    <Products />
    <Dontmiss />
    <Essentials />
    <ProductCards/>
    <Names />
    </div>
  )
}

export default page