import React, { useState } from 'react'
import { PermissionsTableData } from '../../Components/Main/content';

import { LuPencilLine } from "react-icons/lu";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";


export const PermissionsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = PermissionsTableData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(PermissionsTableData.length / itemsPerPage);

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
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        Assigned To
                                    </th>
                                    <th scope="col" className="px-6 uppercase py-3 text-sm">
                                        Created Date
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
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 flex gap-2 font-semibold text-xs">
                                            <p className='uppercase text-[#3C1450] p-2 text-xs w-max rounded-lg bg-[#666CFF1F]'>
                                                Administrator
                                            </p>

                                            <p className={
                                                item.assignedTo === 'Manager'
                                                    ? 'text-xs uppercase p-2 rounded-md text-[#0F0B11] bg-[#FDB5281F]'
                                                    : item.assignedTo === 'User' || item.assignedTo === 'Support'
                                                        ? 'text-xs uppercase p-2 rounded-md text-[#1AB759] bg-[#26C6F91F]'
                                                        : 'text-xs uppercase p-2 rounded-md text-[#FB4E4E] bg-[#FF4D491F]'
                                            }>
                                                {item.assignedTo}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.createdDate}
                                        </td>
                                        <td className="px-4 py-4 text-[0.8375rem]">
                                            <button className='flex gap-4 text-[#32475C99]'>
                                                <LuPencilLine className='h-5 w-5' title='Edit' />
                                                <BiTrashAlt className='h-5 w-5' title='Delete' />
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
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}-{endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{PermissionsTableData.length}</span>
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
