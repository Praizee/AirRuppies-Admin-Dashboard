import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';
import { BiExport } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { PermissionsTable } from './PermissionsTable';
import { AddPermissionsModal } from './AddPermissionsModal';


const Permissions = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mt-4 text-[#2E2E3A] leading-normal font-bold">
                        Permission List
                    </h1>
                    <p className='text-[#32475C99] text-sm font-semibold'>
                        A permission provided access to predefined menus
                        and features so that depending on assigned permission
                        to an administrator can have access to what he needs
                    </p>
                </span>

                <div className='bg-white space-y-4 rounded-lg overflow-x-auto mt-8 p-4 shadow-md'>
                    <div className='flex justify-between'>
                        <div></div>
                        <div className='flex gap-4'>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search Permissions"
                                    className="w-full rounded-md border-[#D6DDEB] py-3.5 pe-10 shadow-sm sm:text-sm"
                                />
                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button">
                                        <GoSearch />
                                    </button>
                                </span>
                            </div>
                            <div>
                                <AddPermissionsModal />
                            </div>
                        </div>
                    </div>
                    <PermissionsTable />
                </div>
            </div>
        </section>
    )
}

export default Permissions