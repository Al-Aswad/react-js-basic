import React from 'react'
import imgProduct from '../img/anh-nguyen-kcA-c3f_3FE-unsplash.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Product = () => {
    return (
        <div className='flex justify-center w-full pt-2'>
            <div className='w-3/12 bg-gray-300 rounded-md p-2'>
                <div className='header h-20 flex justify-between items-center p-2 bg-green-500'>
                    <h1 className='text-white font-bold text-xl'>
                        Etaness
                    </h1>
                    <div className=''>
                        <div className='relative '>
                            <AiOutlineShoppingCart className='w-10 h-10 text-white' />
                            <span className='w-6 h-6 text-white bg-blue-800 rounded-full absolute bottom-0 left-0'>1</span>
                        </div>
                    </div>

                </div>

                <div className='mt-2 p-2 w-full flex justify-center flex-col items-center rounded-sm '>
                    <div className='w-full h-80'>
                        <img className='w-full h-full' src={imgProduct} alt="" />
                    </div>
                    <div className='text-left flex w-full'>
                        <h1 className='font-bold text-xl text-left pt-2'>Anh Nyugen</h1>
                    </div>
                    <div className='text-left flex w-full my-4'>
                        <h1 className='font-bold text-xl text-left'>Rp 300.000</h1>
                    </div>
                    <div className='flex w-full justify-center'>
                        <div className='cursor-pointer w-2/12 rounded-sm text-white text-lg bg-blue-600 flex justify-center items-center'>-</div>
                        <div className='w-8/12 '>
                            <input className='w-full p-2 outline-none active:ring-1 hover:ring-1 ring-blue-400' type="text" name="" id="" />
                        </div>

                        <div className='cursor-pointer w-2/12 rounded-sm text-white text-lg bg-blue-600 flex justify-center items-center'>+</div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Product