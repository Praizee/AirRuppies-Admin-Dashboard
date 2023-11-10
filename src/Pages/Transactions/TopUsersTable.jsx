import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AccountsTableData } from '../../Components/Main/content';

import { HiMiniChevronUpDown } from "react-icons/hi2";
import { BsThreeDots, BsFilter, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GoSearch } from "react-icons/go";



const TopUsersTable = () => {
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
                        <p className="py-2 font-semibold text-lg">
                            Top Users
                        </p>
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
                                        Customer  Name   <HiMiniChevronUpDown className='inline -mt-1' />
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Account <HiMiniChevronUpDown className='inline -mt-1' />
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
                                            {item.accountNo}
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>

                    </div>
                </div>

                <div className='text-center'>
                    <button className='p-4 text-[#3C1450] font-semibold'>
                        View more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TopUsersTable