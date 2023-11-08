import React, { useState } from 'react'
import { AdminTableData } from '../../Components/Main/content';

import { BsThreeDots, BsFilter, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { AddAdminModal } from './AddAdminModal';


export const AdminTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = AdminTableData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(AdminTableData.length / itemsPerPage);

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
                <div className="space-y-8 ">
                    <div className='laptop:flex justify-between'>
                        <h1 className='text-black text-[1.25rem] py-2 font-bold'>
                            {AdminTableData.length} Admins
                        </h1>

                        <div className='flex gap-2'>
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

                        <AddAdminModal />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto text-sm text-left text-[#181336] dark:text-gray-400">
                            {/* Table header */}
                            <thead className="text-xs text-[#25324B] border-b">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Full Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Roles
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Last Active
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            {/* end of Table header) */}

                            {/* Table body */}
                            {displayedData.map((item, index) => (
                                <tbody key={index}>
                                    <tr className="bg-white text-[#25324B] font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            1 {/* 1 add an ordered list here somehow */}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.fullname}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.roles}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.lastActive}
                                        </td>
                                        <td className="px-5 py-4 ">
                                            <p className={item.status === 'Active' ? 'text-[0.8375rem] p-2 rounded-md text-[#1CA78B] bg-[#F0F4F9]' : 'text-[0.8375rem] p-2 rounded-md text-[red] bg-[red]/10'}>
                                                {item.status}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4 text-[0.8375rem]">
                                            <button className='btn text-sm rounded-none normal-case bg-transparent hover:bg-transparent text-[#8F9197] border border-[#D6DDEB] font-semibold'>
                                                <BiEdit className='h-5 w-5' />
                                                Change role
                                            </button>
                                        </td>
                                        <td className="px-4 py-4 text-[0.8375rem]">
                                            <BsThreeDots className="h-6 w-6 cursor-pointer" title='Action' />
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>

                    </div>
                </div>

                {/* Pagination */}
                <nav className="flex items-center bg-white rounded-b-lg justify-between py-4" aria-label="Table navigation">
                    {/* <span className="text-sm font-normal px-6 text-[#515B6F] dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}-{endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{AdminTableData.length}</span>
                    </span> */}
                    <div className="inline-flex mx-auto space-x-2 px-4 text-sm h-8">
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
