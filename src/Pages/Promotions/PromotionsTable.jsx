import React, { useState } from 'react'
import { PromotionsTableData } from '../../Components/Main/content';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


export const PromotionsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = PromotionsTableData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(PromotionsTableData.length / itemsPerPage);

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
                            <thead className="text-xs uppercase bg-[#FAFAFC] text-[#25324B] border-b">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {/* end of Table header) */}

                            {/* Table body */}
                            {displayedData.map((item, index) => (
                                <tbody key={index}>
                                    <tr className="bg-white text-[#25324B] font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.title}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.amount}
                                        </td>
                                        <td className="px-6 py-4 uppercase font-semibold text-[0.8375rem]">
                                            <p className={item.status === 'Active' ? 'text-xs w-max py-2 px-4 rounded-md text-[#71DD37] bg-[#72E1281F]' : 'text-xs py-2 px-4 w-max rounded-md text-[#FFAB00] bg-[#FDB5281F]'}>
                                                {item.status}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4 text-[0.8375rem]">
                                            <Link to="/promotion-details">
                                                <button className='text-sm text-[#3C1450] font-semibold'>
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
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}-{endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{PromotionsTableData.length}</span>
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
