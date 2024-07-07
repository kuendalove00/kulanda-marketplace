import React from 'react'
import Product from './Product'
import Store from './Stores'

const Home = () => {
    return (
        <div className='w-full'>
            <div className="relative w-full">
  <img className="w-full h-150 object-cover" src="/assets/images/febfe4573885832dee9d2b078ff17284.jpg" alt="" />
  <div className="absolute inset-0 flex flex-col  items-center justify-center">
    <h2 className="text-indigo-800 font-bold  text-8xl text-center">Bem Vindo ao</h2>
    
    <h2 className="text-indigo-800 font-bold text-8xl text-center">Kulanda</h2>
  </div>
</div>
                        <Store/>
                        <Product/>
                    </div>
                    )
}

                    export default Home
