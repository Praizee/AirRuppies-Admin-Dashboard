import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AccountsTableData } from '../../Components/Main/content';

import { HiMiniChevronUpDown } from "react-icons/hi2";
import { BsThreeDots, BsFilter, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GoSearch } from "react-icons/go";


const TransactionsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = AccountsTableData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(AccountsTableData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationButtons.push(
            <a
                key={i}
                onClick={() => handlePageChange(i)}
                className={`px-3 py-1 rounded-lg cursor-pointer text-black ${currentPage === i ?
                    'bg-[#3C1450] text-white' :
                    'bg-white'}`}
            >
                {i}
            </a>
        );
    }

    return (
        <section>
            <div>
                <div className="">
                    <div className='flex justify-between gap-2 p-6'>
                        {/* search bar */}
                        <div className="relative">
                            <input
                                type="text"
                                id="Search"
                                placeholder="Search Admins..."
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

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto text-sm text-left text-[#515B6F] dark:text-gray-400">
                            {/* Table header */}
                            <thead className="text-xs text-[#25324B] border-b">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Full Name  <HiMiniChevronUpDown className='inline -mt-1' />
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Email <HiMiniChevronUpDown className='inline -mt-1' />
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Account No. <HiMiniChevronUpDown className='inline -mt-1' />
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Date <HiMiniChevronUpDown className='inline -mt-1' />
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Action <HiMiniChevronUpDown className='inline -mt-1' />
                                    </th>
                                </tr>
                            </thead>
                            {/* end of Table header) */}

                            {/* Table body */}
                            {displayedData.map((item, index) => (
                                <tbody key={index}>
                                    <tr className="bg-white text-[#25324B] font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.fullname}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.accountNo}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.date}
                                        </td>
                                        <td className="px-4 py-4 text-[0.8375rem]">
                                            <Link to="/transactions-details">
                                                <button className='h-max py-2 px-4 text-sm rounded-none normal-case bg-transparent hover:bg-transparent text-[#3C1450] border border-[#3C1450] hover:border-[#3C1450] font-semibold'>
                                                    View
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>

                    </div>
                </div>

                <div className='text-center'>
                    <Link to="/transactions-list">
                        <button className='p-4 text-[#3C1450] font-semibold'>
                            View all Transaction history
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}
export default TransactionsTable