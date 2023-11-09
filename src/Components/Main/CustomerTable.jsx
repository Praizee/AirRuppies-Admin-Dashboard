import React, { useState } from 'react'
import { BsThreeDots, BsFilter } from "react-icons/bs";
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
                <div className="overflow-x- space-y-4 bg-white p-4 shadow-md sm:rounded-t-lg">
                    <h1 className='text-black font-bold mb-8'>
                        Transaction
                    </h1>
                    <div className='laptop:flex justify-between gap-4'>

                        <div className='space-x-4'>
                            <select
                                name="year"
                                id="year"
                                // value={}
                                // onChange={}
                                defaultValue=""
                                className="text-[1rem] text-[#899A9A] p-3 border-2 border-[#B8C9C9] rounded-lg font-bold">
                                <option value="">Start Date</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>

                            <select
                                name="year"
                                id="year"
                                // value={}
                                // onChange={}
                                defaultValue=""
                                className="text-[1rem] text-[#899A9A] p-3 border-2 border-[#B8C9C9] rounded-lg font-bold">
                                <option value="">End Date</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>

                            <select
                                name="year"
                                id="year"
                                // value={}
                                // onChange={}
                                defaultValue=""
                                className="text-[1rem] text-[#899A9A] p-3 mt-2 border-2 border-[#B8C9C9] rounded-lg font-bold">
                                <option value="">Amount</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>

                        <button className='flex gap-2 mt-2 laptop:mt-0 text-[1rem] text-[#202430] p-3 border-2 border-[#B8C9C9] rounded-lg font-bold'>
                            <BsFilter className='h-5 w-5' />
                            filter
                        </button>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto text-sm text-left text-[#181336] dark:text-gray-400">
                            {/* Table header */}
                            <thead className="text-xs text-[#7C8493] bg-[#EEF2F7] dark:bg-[#EEF2F7] dark:text-gray-400">
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
