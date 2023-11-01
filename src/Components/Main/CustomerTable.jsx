import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { CustomerTableData } from './content';


export const CustomerTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = CustomerTableData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(CustomerTableData.length / itemsPerPage);

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
                className={`px-3 py-2 rounded-lg cursor-pointer text-black ${currentPage === i ?
                    'bg-blue-400 text-white' :
                    'bg-white'}`}
            >
                {i}
            </a>
        );
    }

    return (
        <section>
            <div>
                <div className="overflow-x-auto bg-white p-4 shadow-md sm:rounded-t-lg">


                    <div className="overflow-x-auto">
                        <table className="w-full table-auto text-sm text-left text-[#181336] dark:text-gray-400">
                            {/* Table header */}
                            <thead className="text-xs text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Full Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Purpose
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-[0.825rem]">
                                        Amount
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
                                    <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.date}
                                        </td>
                                        <th scope="row" className="px-6 font-semibold text-[0.8375rem] py-4 whitespace-nowrap dark:text-white">
                                            {item.fullname}
                                        </th>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.purpose}
                                        </td>
                                        <td className="px-5 py-4 ">
                                            <p className={item.type === 'Credit' ? 'text-[0.8375rem] p-1 rounded-md text-[#1CA78B] bg-[#F0F4F9]' : 'text-[0.8375rem] p-1 rounded-md text-[red] bg-[red]/10'}>
                                                {item.type}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[0.8375rem]">
                                            {item.amount}
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
                    <span className="text-sm font-normal px-6 text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}-{endIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{CustomerTableData.length}</span>
                    </span>
                    <div className="inline-flex space-x-2 px-4 text-sm h-8">
                        <a
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white rounded-lg border ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                        >
                            Prev
                        </a>
                        <p className='py-2'>
                            {paginationButtons}
                        </p>
                        <a
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-lg border ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                        >
                            Next
                        </a>
                    </div>
                </nav>
            </div>
        </section>
    )
}
