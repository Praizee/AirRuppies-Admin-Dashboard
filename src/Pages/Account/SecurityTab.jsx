import React from 'react'
import { CardDetailsData } from '../../Components/Main/content';

const SecurityTab = () => {
    return (
        <section>
            <div className='bg-white px-4 py-2 rounded-b-lg shadow-lg'>
                <div className='bg-white py-8 px-4 rounded-lg shadow-lg'>
                    <h1 className="text-[1.25rem] mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Reset Password
                    </h1>

                    <span className='space-y-4'>
                        <p className='text-[#32475C99]'>
                            Lorem ipsum dolor etir , mkey mstdyusieeieie
                        </p>
                        <p className='text-[#32475C99]'>
                            Two-factor authentication adds an additional
                            layer of security to your account by requiring
                            more than just a password to
                            log in. <a className='link link-hover text-blue-500'>Learn more</a>.
                        </p>
                    </span>

                    <button type="button"
                        className=" px-4 py-3 my-4 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                        Reset password
                    </button>
                </div>

                <div className='bg-white my-8 p-4 rounded-lg shadow-lg'>
                    <h1 className="text-[1.25rem] mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Send OTP
                    </h1>

                    <span className='space-y-4'>
                        <p className='text-[#32475C99]'>
                            Lorem ipsum dolor etir , mkey mstdyusieeieie
                        </p>
                        <p className='text-[#32475C99]'>
                            Two-factor authentication adds an additional
                            layer of security to your account by requiring
                            more than just a password to
                            log in. <a className='link link-hover text-blue-500'>Learn more</a>.
                        </p>
                    </span>

                    <button type="button"
                        className=" px-4 py-3 my-4 uppercase rounded-md border border-[#3C1450] bg-[#3C1450] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#3C1450] focus:outline-none focus:ring active:text-[#3C1450]">
                        Send otp
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SecurityTab