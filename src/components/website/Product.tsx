import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../ProductData';

const Product = () => {

    const cardItem = (item) => {
        return (
            <div className="max-w-sm mx-auto bg-white overflow-hidden my-5 py-4">
  <img src={item.img} className="w-full h-48 object-cover" alt={item.title} />
  <div className="text-center mt-2">
    <h5 className="text-xl font-semibold">{item.title}</h5>
    <h5 className="text-md font-semibold">{item.price}</h5>
    <div className='flex justify-center'>
    <NavLink to={`/stores/${item.id}`} className="block mt-2 text-blue-500 border border-indigo-500 py-1 px-3 w-1/2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">Ver Loja</NavLink>
    </div>
  </div>
</div>
                );
    }

                return (
                    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                    <div className="container mx-auto py-5">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="text-center">
                          <h1 className="text-3xl font-bold">Produtos</h1>
                          <hr className="border-2 border-gray-400 my-2 mx-auto w-1/4" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {DATA.map((item, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-md">
                              {/* Assuming cardItem function generates card content */}
                              {cardItem(item)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
}

                export default Product
