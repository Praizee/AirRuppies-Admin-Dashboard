import React from 'react'
import { CardDetailsData } from '../../Components/Main/content';

const PersonalDetailsTab = () => {
    return (
        <section>
            <div className='bg-white py-8 rounded-b-lg shadow-lg'>
                <div className='space-y-1 px-8 my- py-4 border-t'>
                    <p className='text-[#25324B] text-lg font-semibold'>
                        Account NO
                    </p>
                    <p className='text-[#40DD7F] text-base font-semibold'>
                        1234567890
                    </p>
                    <p className='text-[#25324B] text-xl font-semibold'>
                        James Joseph Bond
                    </p>
                </div>
                {CardDetailsData.map((item, index) => (
                    <div key={index}
                        className='border border-x-transparent py-4 px-8 grid gap-4 laptop:grid-cols-3 grid-cols-2'>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Title
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.title}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Surname
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.surname}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Firstname
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.firstname}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Other names
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.othernames}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Gender
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.gender}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Phone Number
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.phonenumber}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Email Address (Optional)
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.emailaddress}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    House number
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.houseNumber}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Street Name
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.streetName}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    State
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.state}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    Referral Code (Optional)
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.referralCode}
                                </p>
                            </span>
                        </div>
                        <div>
                            <span className='space-y-2'>
                                <p className='text-[#7C88B1] text-sm font-semibold'>
                                    BVN
                                </p>
                                <p className="text-base text-[#25324B] leading-normal font-bold">
                                    {item.bvn}
                                </p>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PersonalDetailsTab