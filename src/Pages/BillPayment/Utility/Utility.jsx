import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';
import { UtilityTable } from './UtilityTable';


const Utility = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mt-4 text-[#2E2E3A] leading-normal font-bold">
                        Utility Payment
                    </h1>
                    <p className='text-[#32475C99] font-semibold'>
                        Showing your utility payment metrics for July 16,2023 - July 25,2023
                    </p>
                </span>


                <div className='bg-white rounded-lg overflow-x-auto mt-8 p-0 shadow-md'>
                    <UtilityTable />
                </div>
            </div>
        </section>
    )
}

export default Utility