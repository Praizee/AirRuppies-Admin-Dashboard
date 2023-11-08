import React, { useState } from 'react'
import { AccountsTableData } from '../../Components/Main/content';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { Link } from 'react-router-dom';


export const AccountsTable = () => {
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
                <div className="space-y-8">

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
                                            <Link to="/account-details">
                                                <button className='btn text-sm rounded-none normal-case bg-transparent hover:bg-transparent text-[#3C1450] border border-[#3C1450] hover:border-[#3C1450] font-semibold'>
                                                    View Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>

                    </div>
                </div>

                {/* Pagination */}
                <nav className="flex items-center bg-white rounded-b-lg justify-between py-4" aria-label="Table navigation">
                    <span className="text-sm font-normal px-6 text-[#515B6F] dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}-{endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{AccountsTableData.length}</span>
                    </span>
                    <div className="inline-flex space-x-2 px-4 text-sm h-8">
                        <a
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`flex items-center justify-center px-3 h-8 ml-0 
                            leading-tight text-[#25324B] bg-white rounded-lg border 
                            ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                        >
                            <BsChevronLeft className='w-5 h-5' />
                        </a>
                        <p className='py-2'>
                            {paginationButtons}
                        </p>
                        <a
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`flex items-center justify-center px-3 h-8 
                            leading-tight text-[#25324B] bg-white rounded-lg border 
                            ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                        >
                            <BsChevronRight className='w-5 h-5' />
                        </a>
                    </div>
                </nav>
            </div>
        </section>
    )
}
