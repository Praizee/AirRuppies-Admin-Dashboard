import React from 'react'
import RefundsTable from "./RefundsTable"
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { BsFilter } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const TransactionsDetails = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mt-4 text-[#2E2E3A] leading-normal font-bold">
                        List of transaction
                    </h1>
                    <p className='text-[#32475C99] font-semibold'>
                        Showing your  transactions metrics for July 16,2023 - July 25,2023
                    </p>
                </span>

                <div className='bg-white rounded-lg overflow-x-auto laptop:flex justify-between gap-2 p-6 mt-8 shadow-md'>
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
                    <span className='flex mt-4 laptop:mt-0 gap-4'>
                        <button className='btn rounded-none normal-case bg-transparent hover:bg-transparent text-[1rem] text-[#202430] border border-[#D6DDEB] font-bold'>
                            <BsFilter className='h-5 w-5' />
                            filter
                        </button>
                        <button type="button"
                            className=" px-4 py-3  rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                            Export CSV
                        </button>
                    </span>
                </div>

                <div className='bg-white rounded-lg overflow-x-auto mt-8 p-0 shadow-md'>
                    <RefundsTable />
                </div>
            </div>
        </section>
    )
}

export default TransactionsDetails