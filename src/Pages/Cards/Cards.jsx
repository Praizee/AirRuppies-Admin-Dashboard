import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';
import { CardsTable } from '../Cards/CardsTable';


const Cards = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mt-4 text-[#2E2E3A] leading-normal font-bold">
                        Cards
                    </h1>
                    <p className='text-[#32475C99] font-semibold'>
                        Showing your savings metrics for July 16,2023 - July 25,2023
                    </p>
                </span>

                <div className='bg-white my-8 p-4 space-y-1 rounded-lg shadow-lg'>
                    <p className='text-[#32475C99] font-semibold'>
                        Virtual Cards
                    </p>
                    <span className='flex gap-2'>
                        <h1 className="text-[1.25rem] text-[#2E2E3A] leading-normal font-bold">
                            21,459
                        </h1>

                        <h1 className="text-sm py-1 text-[#40DD7F] leading-normal font-bold">
                            (+29%)
                        </h1>
                    </span>
                    <p className='text-[#32475C99] text-xs font-semibold'>
                        Total number of virtual collected
                    </p>
                </div>

                <div className='bg-white rounded-lg overflow-x-auto mt-8 p-0 shadow-md'>
                    <CardsTable />
                </div>
            </div>
        </section>
    )
}

export default Cards