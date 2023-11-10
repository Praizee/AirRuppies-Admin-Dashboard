import React from 'react'

const SavingsStatistics = () => {
    return (
        <div>
            <div className='grid laptop:grid-cols-2 mt-4 grid-cols-1 laptop:gap-8 gap-4'>
                <div className='bg-white my- p-4 space-y-1 rounded-lg shadow-lg'>
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

                <div className='bg-white my- p-4 space-y-1 rounded-lg shadow-lg'>
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
        </div>
    )
}

export default SavingsStatistics