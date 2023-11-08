import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';
import { AdminTable } from './AdminTable';


const Admin = () => {
    return (
        <section>
            <div className="container pt-20 pb-0">
                <span className=''>
                    <h1 className="text-[2rem] mt-4 mb- text-[#2E2E3A] leading-normal font-bold">
                        Admin
                    </h1>
                    <p className='text-[#32475C99] font-semibold'>
                        Showing your  admin metrics for July 16,2023 - July 25,2023
                    </p>
                </span>

                <div className='bg-white overflow-x-auto mt-8 px-4 py-8 tablet:p-6 shadow-md'>
                    <AdminTable />
                </div>
            </div>
        </section>
    )
}

export default Admin