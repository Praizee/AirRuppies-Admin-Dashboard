import React, { useState } from 'react'
import { RolesTableData } from '../../Components/Main/content';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';


export const RolesTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = RolesTableData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(RolesTableData.length / itemsPerPage);

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
                    <div className="overflow-x-auto relative">

                        <table className="w-full table-auto text-sm text-left text-[#515B6F] dark:text-gray-400">
                            {/* Table header */}

                            <thead className="text-xs text-[#25324B] border-b">
                                <tr>
                                    <th scope="col" class="p-4">
                                        <div class="flex items-center">
                                            <input
                                                id="checkbox-all-search"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        User
                                    </th>
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {/* end of Table header) */}

                            {/* Table body */}
                            {displayedData.map((item, index) => (
                                <tbody key={index}>
                                    <tr className="bg-white text-[#32475C99] font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input
                                                    id="checkbox-table-search-1"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.user}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.role}
                                        </td>
                                        <td className="px-6 py-4 uppercase font-semibold text-[0.8375rem]">
                                            <p className={item.status === 'Active' ? 'text-xs p-2 rounded-md text-[#71DD37] bg-[#72E1281F]' : 'text-xs p-2 rounded-md text-[#FFAB00] bg-[#FDB5281F]'}>
                                                {item.status}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4 text-[0.8375rem]">
                                            <button className='text-[#32475C99]'>
                                                <FiEye className='h-5 w-5' />
                                            </button>
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
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}-{endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{RolesTableData.length}</span>
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
