import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';
import { SavingsTable } from './SavingsTable';


const Savings = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mt-4 text-[#2E2E3A] leading-normal font-bold">
                        Savings
                    </h1>
                    <p className='text-[#32475C99] font-semibold'>
                        Showing your savings metrics for July 16,2023 - July 25,2023
                    </p>
                </span>

                <div className='grid grid-cols-2 gap-8'>
                    <div className='bg-white my-8 p-4 space-y-1 rounded-lg shadow-lg'>
                        <p className='text-[#32475C99] font-semibold'>
                            Active Savings
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
                            Total savings In AirRuppies
                        </p>
                    </div>

                    <div className='bg-white my-8 p-4 space-y-1 rounded-lg shadow-lg'>
                        <p className='text-[#32475C99] font-semibold'>
                            Completed Savings
                        </p>
                        <span className='flex gap-2'>
                            <h1 className="text-[1.25rem] text-[#2E2E3A] leading-normal font-bold">
                                4,567
                            </h1>

                            <h1 className="text-sm py-1 text-[#40DD7F] leading-normal font-bold">
                                (+18%)
                            </h1>
                        </span>
                        <p className='text-[#32475C99] text-xs font-semibold'>
                            Last week analytics
                        </p>
                    </div>
                </div>

                <div className='bg-white rounded-lg overflow-x-auto mt-8 p-0 shadow-md'>
                    <SavingsTable />
                </div>
            </div>
        </section>
    )
}

export default Savings