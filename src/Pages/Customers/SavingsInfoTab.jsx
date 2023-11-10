import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";


const SavingsInfoTab = () => {
    return (
        <section>
            {/* No toggle for this... */}
            {/* <TransferModal /> */}
            <div className='bg-white py-8 px-4 rounded-b-lg shadow-lg'>

                <span className=''>
                    <p className='px-4 font-semibold'>
                        Savings Information
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

                    {/* Active Savings and Savings History */}
                    <div className='laptop:flex justify-between gap-20'>
                        {/* 01 */}
                        <div className='bg-white w- space-y-4 w-full text-[#25324B] my-8 py-8 px-4 rounded-lg border'>
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
                        <div className='bg-white space-y-4 w-full text-[#25324B] my-8 py-8 px-4 rounded-lg border'>
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

            </div>
        </section >
    )
}

export default SavingsInfoTab