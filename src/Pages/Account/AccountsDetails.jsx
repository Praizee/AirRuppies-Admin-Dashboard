import React from 'react'
import { Link } from 'react-router-dom'

import { BiArrowBack } from "react-icons/bi";
import AccountPageTabs from '../../Components/Tabs/AccountPageTabs';


const AccountsDetails = () => {
    return (
        <section>
            <div className="container pt-16 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mb-4 flex gap-2  text-[#25324B] leading-normal font-bold">
                        <Link to="/account">
                            <BiArrowBack className='h-7 w-7 my-1' />
                        </Link>
                        Account  - <span className='text-base pt-2 font-semibold'>APP-2020060400029020-7038</span>
                    </h1>
                </span>

                <AccountPageTabs />

            </div>
        </section>
    )
}

export default AccountsDetails