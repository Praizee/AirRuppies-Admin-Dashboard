import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';
import { BiExport } from "react-icons/bi";
import { RolesTable } from './RolesTable';
import RolesList from './RolesList';


const Roles = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mt-4 text-[#2E2E3A] leading-normal font-bold">
                        Roles List
                    </h1>
                    <p className='text-[#32475C99] text-sm font-semibold'>
                        A role provided access to predefined menus and
                        features so that depending on assigned role an
                        administrator can have access to what he needs
                    </p>
                </span>

                <div className='py-4'>
                    <RolesList />
                </div>

                <div className='bg-white space-y-4 rounded-lg overflow-x-auto mt-8 p-4 shadow-md'>
                    <span className='p-4'>
                        <button className='btn rounded-md bg-transparent hover:bg-transparent text-[1rem] text-[#8592A3] border border-[#8592A3] font-bold'>
                            <BiExport className='h-5 w-5' />
                            Export
                        </button>
                    </span>
                    <RolesTable />
                </div>
            </div>
        </section>
    )
}

export default Roles