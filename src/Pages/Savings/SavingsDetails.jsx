import React from 'react'
import { Link } from 'react-router-dom'
import { CardDetailsData } from '../../Components/Main/content';

import { BiArrowBack } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { ModifySavingsModal } from './ModifySavingsModal';


const SavingsDetails = () => (
    <section>
        <div className="container pt-16 pb-0">
            <span className=''>
                <span className='laptop:flex justify-between mb-4'>
                    <h1 className="text-[1.5rem] mb- flex gap-2  text-[#25324B] leading-normal font-bold">
                        <Link to="/savings">
                            <BiArrowBack className='h-7 w-7 my-1' />
                        </Link>
                        Savings Details
                    </h1>
                    <span className='laptop:flex gap-8'>
                        <ModifySavingsModal />

                        <span className='flex gap-4'>
                            <p className='text-[#40DD7F] py-2'>
                                Deactivate  Savings
                            </p>
                            <label
                                for="AcceptConditions" title="Deactivate ADS"
                                class="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                            >
                                <input
                                    type="checkbox"
                                    id="AcceptConditions"
                                    defaultChecked
                                    class="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                                />

                                <span
                                    class="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
                                >
                                    <svg
                                        data-unchecked-icon
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <svg
                                        data-checked-icon
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="hidden h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>

                                <span
                                    class="absolute inset-0 rounded-full bg-[#E93C3C] transition peer-checked:bg-green-500"
                                ></span>
                            </label>
                        </span>
                    </span>
                </span>

                <span className='flex justify-between'>
                    <span className='space-y-'>
                        <p className='text-[#25324B] text-xl font-semibold'>
                            Temi ventures
                        </p>
                        <p className='text-[#40DD7F] font-semibold'>
                            1234567890
                        </p>
                    </span>
                    <span className='py-2'>
                        <p className='text-[#FFB836] h-min rounded-full text-sm p-1 font-semibold  border border-[#FFB836]'>
                            <GoDotFill className='inline -mt-1 mr-1' />
                            Tier 2
                        </p>
                    </span>
                </span>
            </span>

            {/* Active Savings and Savings History */}
            <div className='laptop:flex justify-between gap-20'>
                {/* 01 */}
                <div className='bg-white w- space-y-4 w-full text-[#25324B] my-8 py-8 px-4 rounded-lg shadow-lg'>
                    <div className='flex justify-between gap-4 mb-4'>
                        <p className='font-semibold'>
                            Active savings
                        </p>
                        <p>
                            Active
                        </p>
                    </div>
                    <div className='border rounded-lg p-2 space-y-2 text-[#25324B]'>
                        <p className='text-sm font-semibold'>
                            Balling savings
                        </p>
                        <p className='text-[1.15769rem] font-bold'>
                            75,000/100,000
                        </p>
                        <span className='flex justify-between'>
                            <p className='text-[0.625rem]'>
                                Start : <b className='text-[0.625rem]'>2/03/2022</b>
                            </p>
                            <p className='text-[0.625rem]'>
                                Withdraw : <b className='text-[0.625rem]'>2/09/2022</b>
                            </p>
                        </span>
                        <div className="w-full bg-[#8F92A1]/30 rounded-full h-1.5">
                            <div className="bg-[#9310D4] h-1.5 rounded-full w-[45%]"></div>
                        </div>
                    </div>

                    <div className='border rounded-lg p-2 space-y-2 text-[#25324B]'>
                        <p className='text-sm font-semibold'>
                            Balling savings
                        </p>
                        <p className='text-[1.15769rem] font-bold'>
                            75,000/100,000
                        </p>
                        <span className='flex justify-between'>
                            <p className='text-[0.625rem]'>
                                Start : <b className='text-[0.625rem]'>2/03/2022</b>
                            </p>
                            <p className='text-[0.625rem]'>
                                Withdraw : <b className='text-[0.625rem]'>2/09/2022</b>
                            </p>
                        </span>
                        <div className="w-full bg-[#8F92A1]/30 rounded-full h-1.5">
                            <div className="bg-[#9310D4] h-1.5 rounded-full w-[45%]"></div>
                        </div>
                    </div>

                    <div className='border rounded-lg p-2 space-y-2 text-[#25324B]'>
                        <p className='text-sm font-semibold'>
                            Balling savings
                        </p>
                        <p className='text-[1.15769rem] font-bold'>
                            75,000/100,000
                        </p>
                        <span className='flex justify-between'>
                            <p className='text-[0.625rem]'>
                                Start : <b className='text-[0.625rem]'>2/03/2022</b>
                            </p>
                            <p className='text-[0.625rem]'>
                                Withdraw : <b className='text-[0.625rem]'>2/09/2022</b>
                            </p>
                        </span>
                        <div className="w-full bg-[#8F92A1]/30 rounded-full h-1.5">
                            <div className="bg-[#9310D4] h-1.5 rounded-full w-[45%]"></div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='text-[#85BC2C] text-sm font-semibold'>
                            View more
                        </button>
                    </div>
                </div>


                {/* 02 */}
                <div className='bg-white space-y-4 w-full text-[#25324B] my-8 py-8 px-4 rounded-lg shadow-lg'>
                    <div className='mb-4'>
                        <p className='font-semibold'>
                            Savings History
                        </p>
                    </div>
                    <div className='border rounded-lg p-2 space-y-2 text-[#25324B]'>
                        <p className='text-sm font-semibold'>
                            Balling savings
                        </p>
                        <p className='text-[1.15769rem] font-bold'>
                            75,000/100,000
                        </p>
                        <span className='flex justify-between'>
                            <p className='text-[0.625rem]'>
                                Start : <b className='text-[0.625rem]'>2/03/2022</b>
                            </p>
                            <p className='text-[0.625rem]'>
                                Withdraw : <b className='text-[0.625rem]'>2/09/2022</b>
                            </p>
                        </span>
                        <div className="w-full bg-[#8F92A1]/30 rounded-full h-1.5">
                            <div className="bg-[#40DD7F] h-1.5 rounded-full"></div>
                        </div>
                    </div>

                    <div className='border rounded-lg p-2 space-y-2 text-[#25324B]'>
                        <p className='text-sm font-semibold'>
                            Balling savings
                        </p>
                        <p className='text-[1.15769rem] font-bold'>
                            75,000/100,000
                        </p>
                        <span className='flex justify-between'>
                            <p className='text-[0.625rem]'>
                                Start : <b className='text-[0.625rem]'>2/03/2022</b>
                            </p>
                            <p className='text-[0.625rem]'>
                                Withdraw : <b className='text-[0.625rem]'>2/09/2022</b>
                            </p>
                        </span>
                        <div className="w-full bg-[#8F92A1]/30 rounded-full h-1.5">
                            <div className="bg-[#40DD7F] h-1.5 rounded-full"></div>
                        </div>
                    </div>

                    <div className='border rounded-lg p-2 space-y-2 text-[#25324B]'>
                        <p className='text-sm font-semibold'>
                            Balling savings
                        </p>
                        <p className='text-[1.15769rem] font-bold'>
                            75,000/100,000
                        </p>
                        <span className='flex justify-between'>
                            <p className='text-[0.625rem]'>
                                Start : <b className='text-[0.625rem]'>2/03/2022</b>
                            </p>
                            <p className='text-[0.625rem]'>
                                Withdraw : <b className='text-[0.625rem]'>2/09/2022</b>
                            </p>
                        </span>
                        <div className="w-full bg-[#8F92A1]/30 rounded-full h-1.5">
                            <div className="bg-[#40DD7F] h-1.5 rounded-full"></div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='text-[#85BC2C] text-sm font-semibold'>
                            View more
                        </button>
                    </div>
                </div>
            </div>
            {/* End of Active Savings and Savings History */}

            {/* Transactions */}
            <div className='bg-white py-8 space-y-4 border rounded-lg'>
                <div className='flex justify-between pb-4 border-b'>
                    <h2 className='font-semibold px-6'>
                        Transactions
                    </h2>
                </div>

                <div className='flex justify-between border-b px-6 pb-4'>
                    <span className='flex gap-4'>
                        <span className='bg-[#EDEFF2] rounded-full p-4'>
                            <AiOutlineFall className="h-5 w-5 text-[#ED342B]" />
                        </span>
                        <span className='space-y-2'>
                            <p className=' text-[#242F57] font-semibold'>
                                Family savings
                            </p>
                            <p className='text-[#32475C99] text-sm'>
                                Withdraw
                            </p>
                        </span>
                    </span>
                    <span className='text-right'>
                        <p className=' text-[#ED342B] text-lg font-semibold'>
                            -₦5,000
                        </p>
                        <p className='text-[#32475C99]'>
                            Today 11:32:40pm
                        </p>
                    </span>
                </div>

                <div className='flex justify-between border-b px-6 pb-4'>
                    <span className='flex gap-4'>
                        <span className='bg-[#EDEFF2] rounded-full p-4'>
                            <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                        </span>
                        <span className='space-y-2'>
                            <p className=' text-[#242F57] font-semibold'>
                                Family savings
                            </p>
                            <p className='text-[#32475C99] text-sm'>
                                Deposit
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

                <div className='flex justify-between border-b px-6 pb-4'>
                    <span className='flex gap-4'>
                        <span className='bg-[#EDEFF2] rounded-full p-4'>
                            <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                        </span>
                        <span className='space-y-2'>
                            <p className=' text-[#242F57] font-semibold'>
                                Family savings
                            </p>
                            <p className='text-[#32475C99] text-sm'>
                                Deposit
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

                <div className='flex justify-between border-b px-6 pb-4'>
                    <span className='flex gap-4'>
                        <span className='bg-[#EDEFF2] rounded-full p-4'>
                            <AiOutlineRise className="h-5 w-5 text-[#2AC769]" />
                        </span>
                        <span className='space-y-2'>
                            <p className=' text-[#242F57] font-semibold'>
                                Family savings
                            </p>
                            <p className='text-[#32475C99] text-sm'>
                                Deposit
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
            </div>
            {/* End of Transactions */}

        </div>
    </section>
)

export default SavingsDetails