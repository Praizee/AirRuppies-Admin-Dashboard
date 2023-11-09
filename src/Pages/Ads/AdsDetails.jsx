import React from 'react'
import { Link } from 'react-router-dom'
import { AdsDetailsData } from '../../Components/Main/content';

import { BiArrowBack } from "react-icons/bi";
import { DeleteAdsModal } from './DeleteAdsModal';
import { DeactivateAdsModal } from './DeactivateAdsModal';

const AdsDetails = () => {
    return (
        <section>
            <div className="container pt-16 pb-0">
                <span className='flex justify-between'>
                    <h1 className="text-[1.5rem] mb-4 flex gap-2  text-[#25324B] leading-normal font-bold">
                        <Link to="/ads">
                            <BiArrowBack className='h-7 w-7 my-1' />
                        </Link>
                        ADS Details
                    </h1>

                    <DeactivateAdsModal />
                </span>

                <div className='bg-white my-8 py-8 rounded-lg shadow-lg '>

                    <div className='border border-x-transparent py-4'>
                        {AdsDetailsData.map((item, index) => (
                            <div key={index}
                                className=' py-4 px-8 mb-4 grid gap-4 laptop:grid-cols-3 grid-cols-2'>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Title
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.title}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Description
                                        </p>
                                        <p className="text-base text-[#25324B] leading-normal font-bold">
                                            {item.description}
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span className='space-y-2'>
                                        <p className='text-[#7C88B1] text-sm font-semibold'>
                                            Image
                                        </p>
                                        <img src={item.image} className='' alt='Card' />
                                    </span>
                                </div>
                            </div>

                        ))}
                        <span className='px-8'>
                            <DeleteAdsModal />
                        </span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AdsDetails