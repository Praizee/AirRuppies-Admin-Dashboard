import React from 'react'
import { BiLaptop, BiLogoAndroid, BiLogoApple } from "react-icons/bi";

const RecentDevices = () => {
    return (
        <section>
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm text-left text-[#181336] dark:text-gray-400">
                    {/* Table header */}
                    <thead className="text-xs text-[#32475CDE] bg-[#FAFAFC] dark:bg-[#EEF2F7] dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 uppercase text-[0.825rem]">
                                Browser
                            </th>
                            <th scope="col" className="px-6 py-3 uppercase text-[0.825rem]">
                                Device
                            </th>
                            <th scope="col" className="px-6 py-3 uppercase text-[0.825rem]">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3 uppercase text-[0.825rem]">
                                Recent Activity
                            </th>
                        </tr>
                    </thead>
                    {/* end of Table header) */}

                    {/* Table body */}
                    <tbody className='border'>
                        <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 flex gap-2 text-sm text-[#32475CDE]">
                                <BiLaptop className='h-5 w-5 text-[#FFAB00]' />
                                Chrome on Windows
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                Dell XPS 15
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                Nigeria
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                28 Sept. 2023, 18:20
                            </td>
                        </tr>
                        <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 flex gap-2 text-sm text-[#32475CDE]">
                                <BiLogoAndroid className='h-5 w-5 text-[#71DD37]' />
                                Chrome on Android
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                Google Pixel 3a
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                Nigeria
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                20 Sept. 2023, 10:20
                            </td>
                        </tr>
                        <tr className="bg-white font-medium border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 flex gap-2 text-sm text-[#32475CDE]">
                                <BiLogoApple className='tablet:h-5 tablet:w-5 h-8 w-8 text-[#FF3E1D]' />
                                Chrome on iPhone
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                iPhone 12x
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                Nigeria
                            </td>
                            <td className="px-6 py-4 text-sm text-[#32475CDE]">
                                16 Sept. 2023, 04:20
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default RecentDevices