import React from 'react'
import { Link } from 'react-router-dom'

import { BiArrowBack } from "react-icons/bi";
import CustomersPageTabs from '../../Components/Tabs/CustomersPageTabs';
import { DeactivateCustomerModal } from './DeactivateCustomerModal';


const CustomersDetails = () => {
    return (
        <section>
            <div className="container pt-16 pb-0">
                <span className='flex justify-between my-4 mb-8'>
                    <h1 className="text-[1.5rem] flex gap-2  text-[#25324B] leading-normal font-bold">
                        <Link to="/customers">
                            <BiArrowBack className='h-7 w-7 my-1' />
                        </Link>
                        Customers Details
                    </h1>
                    <p className='text-xs text-[#40DD7F]'>
                        Activate account
                    </p>
                    <DeactivateCustomerModal />
                </span>

                <CustomersPageTabs />

            </div>
        </section>
    )
}

export default CustomersDetails