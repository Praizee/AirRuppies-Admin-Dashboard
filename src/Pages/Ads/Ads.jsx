import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { AdsTable } from './AdsTable';
import AdsStatistics from './AdsStatistics';
import { BiExport } from "react-icons/bi";
import { CreateAdsModal } from './CreateAdsModal';


const Ads = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <div className='mt-4'>
                    <span className=''>
                        <h1 className="text-[1.5rem] text-[#3C1450] leading-normal font-bold">
                            ADS
                        </h1>
                        <p className='text-[#32475C99] text-base font-semibold'>
                            Showing your ADS for July 16,2023 - July 25,2023
                        </p>
                    </span>
                </div>

                <div className='py-4'>
                    <AdsStatistics />
                </div>

                <div className='bg-white rounded-lg overflow-x-auto mt-8 p-0 shadow-md'>
                    <div className='flex justify-between gap-4 px-4 py-6'>
                        <button className='btn rounded-md bg-transparent hover:bg-transparent text-base text-[#8592A3] border border-[#8592A3] font-bold'>
                            <BiExport className='h-5 w-5' />
                            Export
                        </button>
                        <CreateAdsModal />
                    </div>

                    <AdsTable />
                </div>
            </div>
        </section>
    )
}

export default Ads