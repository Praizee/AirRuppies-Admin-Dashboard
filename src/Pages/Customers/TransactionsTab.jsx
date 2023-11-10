import React from 'react'
import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { TransferModal } from './TransferModal';

const TransactionsTab = () => {
    return (
        <section>
            {/* No toggle for this... */}
            {/* <TransferModal /> */}
            <div className='bg-white py-8 px-4 rounded-b-lg shadow-lg'>
                <span className=''>
                    <p className='px-4 font-semibold'>
                        Transactions
                    </p>
                    <p className='px-4'>
                        This information can not  be created and edited
                    </p>
                </span>

                <div className='px-4'>
                    <span className=''>
                        <h1 className="text-lg mt-4 text-[#2E2E3A] leading-normal font-bold">
                            Wallet Balance
                        </h1>
                        <h1 className="text-[2rem] text-[#2AC769] leading-normal font-bold">
                            ₦36,000,075,300
                        </h1>
                    </span>

                    <div className='mt-10 laptop:flex space-y-6 laptop:space-y-0 gap-8'>
                        {/* 01 */}
                        <div className='space-y-4 laptop:w-1/2 border px-3 py-3 rounded-lg'>
                            <div className='laptop:flex justify-between mt-4 mb-8'>
                                {/* search bar */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="Search"
                                        placeholder="Search"
                                        className="w-full rounded-md border-[#D6DDEB] py-3.5 pe-10 shadow-sm sm:text-sm"
                                    />
                                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                        <button type="button">
                                            <GoSearch />
                                        </button>
                                    </span>
                                </div>
                                {/* end of search bar */}
                                <button className='btn rounded-none normal-case bg-transparent hover:bg-transparent text-[1rem] text-[#202430] border border-[#D6DDEB] font-bold'>
                                    <BsFilter className='h-5 w-5' />
                                    filter
                                </button>
                            </div>

                            <div className='flex justify-between'>
                                <span className='flex gap-4'>
                                    <span className='bg-[#EDEFF2] rounded-full p-4'>
                                        <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                                    </span>
                                    <span className='space-y-2'>
                                        <p className=' text-[#242F57] font-semibold'>
                                            Deposit
                                        </p>
                                        <p className='text-[#32475C99] text-sm'>
                                            Bonus
                                        </p>
                                    </span>
                                </span>
                                <span className='text-right'>
                                    <p className=' text-[#2AC769] text-lg font-semibold'>
                                        +₦5,000
                                    </p>
                                    <p className='text-[#32475C99]'>
                                        Today 11:32:40pm
                                    </p>
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='flex gap-4'>
                                    <span className='bg-[#EDEFF2] rounded-full p-4'>
                                        <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                                    </span>
                                    <span className='space-y-2'>
                                        <p className=' text-[#242F57] font-semibold'>
                                            Deposit
                                        </p>
                                        <p className='text-[#32475C99] text-sm'>
                                            Bonus
                                        </p>
                                    </span>
                                </span>
                                <span className='text-right'>
                                    <p className=' text-[#2AC769] text-lg font-semibold'>
                                        +₦5,000
                                    </p>
                                    <p className='text-[#32475C99]'>
                                        Today 11:32:40pm
                                    </p>
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='flex gap-4'>
                                    <span className='bg-[#EDEFF2] rounded-full p-4'>
                                        <AiOutlineFall className="h-5 w-5 text-[#ED342B]" />
                                    </span>
                                    <span className='space-y-2'>
                                        <p className=' text-[#242F57] font-semibold'>
                                            Withdrawal
                                        </p>
                                        <p className='text-[#32475C99] text-sm'>
                                            Bonus
                                        </p>
                                    </span>
                                </span>
                                <span className='text-right'>
                                    <p className=' text-[#ED342B] text-lg font-semibold'>
                                        +₦5,000
                                    </p>
                                    <p className='text-[#32475C99]'>
                                        Today 11:32:40pm
                                    </p>
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='flex gap-4'>
                                    <span className='bg-[#EDEFF2] rounded-full p-4'>
                                        <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                                    </span>
                                    <span className='space-y-2'>
                                        <p className=' text-[#242F57] font-semibold'>
                                            Deposit
                                        </p>
                                        <p className='text-[#32475C99] text-sm'>
                                            Bonus
                                        </p>
                                    </span>
                                </span>
                                <span className='text-right'>
                                    <p className=' text-[#2AC769] text-lg font-semibold'>
                                        +₦5,000
                                    </p>
                                    <p className='text-[#32475C99]'>
                                        Today 11:32:40pm
                                    </p>
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='flex gap-4'>
                                    <span className='bg-[#EDEFF2] rounded-full p-4'>
                                        <AiOutlineFall className="h-5 w-5 text-[#ED342B]" />
                                    </span>
                                    <span className='space-y-2'>
                                        <p className=' text-[#242F57] font-semibold'>
                                            Withdrawal
                                        </p>
                                        <p className='text-[#32475C99] text-sm'>
                                            Bonus
                                        </p>
                                    </span>
                                </span>
                                <span className='text-right'>
                                    <p className=' text-[#ED342B] text-lg font-semibold'>
                                        +₦5,000
                                    </p>
                                    <p className='text-[#32475C99]'>
                                        Today 11:32:40pm
                                    </p>
                                </span>
                            </div>
                        </div>

                        {/* 02 */}
                        <div className=' space-y-4 laptop:w-1/2 w-full border px-3 py-3 rounded-lg'>
                            <div className='laptop:flex justify-between mt-4 mb-8'>
                                {/* search bar */}
                                <p className='font-semibold py-2'>
                                    Bill Services
                                </p>
                                <button className='btn rounded-none normal-case bg-transparent hover:bg-transparent text-[1rem] text-[#202430] border border-[#D6DDEB] font-bold'>
                                    <BsFilter className='h-5 w-5' />
                                    filter
                                </button>
                            </div>

                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Airtime/ Data
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[80%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[70%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[60%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[55%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[50%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[45%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[40%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[30%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[25%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8 text-[#7C8493]'>
                                <p className='text-xs'>
                                    Cable TV
                                </p>
                                <div className="my-1 bg-[#8F92A1]/30 w-3/4 rounded-full h-1.5">
                                    <div className="bg-[#40DD7F] h-1.5 w-[20%] rounded-full"></div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='text-[#40DD7F]'>
                                    View more
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section >
    )
}

export default TransactionsTab