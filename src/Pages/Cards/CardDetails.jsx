import React from 'react'
import { Link } from 'react-router-dom'
import { CardDetailsData } from '../../Components/Main/content';

import { BiArrowBack } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import PNG from "../../assets/Png.png"
import PDF from "../../assets/Pdf.png"


const CardDetails = () => {
    return (
        <section>
            <div className="container pt-16 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mb-4 flex gap-2  text-[#25324B] leading-normal font-bold">
                        <Link to="/cards">
                            <BiArrowBack className='h-7 w-7 my-1' />
                        </Link>
                        Card  Details
                    </h1>
                    <span className='flex justify-between'>
                        <span className='space-y-'>
                            <p className='text-[#25324B] text-xl font-semibold'>
                                Temi ventures
                            </p>
                            <p className='text-[#40DD7F] font-semibold'>
                                1234567890
                            </p>
                        </span>
                        <span className='flex gap-2 py-2'>
                            <p className='text-[#FFB836] h-min rounded-full text-sm p-1 font-semibold  border border-[#FFB836]'>
                                <GoDotFill className='inline -mt-1 mr-1' />
                                Tier 2
                            </p>
                            <p className='text-[#EB001B] h-min rounded-full text-sm p-1 font-semibold  border border-[#EB001B]'>
                                <GoDotFill className='inline -mt-1 mr-1' />
                                Tier 3
                            </p>
                        </span>
                    </span>
                </span>

                <div className='bg-white my-8 py-8 rounded-lg shadow-lg'>
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
                                        Insurance Fee
                                    </p>
                                    <p className="text-base text-[#25324B] leading-normal font-bold">
                                        Free
                                    </p>
                                </span>
                            </div>
                            <div>
                                <span className='space-y-2'>
                                    <p className='text-[#7C88B1] text-sm font-semibold'>
                                        Maintenance Fee
                                    </p>
                                    <p className="text-base text-[#25324B] leading-normal font-bold">
                                        Free
                                    </p>
                                </span>
                            </div>
                            <div>
                                <span className='space-y-2'>
                                    <p className='text-[#7C88B1] text-sm font-semibold'>
                                        Date of Birth
                                    </p>
                                    <p className="text-base text-[#25324B] leading-normal font-bold">
                                        {item.dateofbirth}
                                    </p>
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className='bg-white p-6'>
                        <p className='text-[#25324B] text-lg font-semibold'>
                            Recent information uploaded for card
                        </p>

                        <div className='grid grid-cols-2 gap-8 laptop:w-1/2 mt-4'>
                            <span className='text-center p-4 rounded-lg border border-[#85BC2C] border-dashed'>
                                <img src={PDF} className='mx-auto my-2' alt='PDF' />
                                <p className='font-semibold'>
                                    Offer Letter.pdf
                                </p>
                                <button className='text-[#85BC2C]'>
                                    View File
                                </button>
                            </span>
                            <span className='text-center p-4 rounded-lg border border-[#85BC2C] border-dashed'>
                                <img src={PNG} className='mx-auto my-2' alt='PNG' />
                                <p className='font-semibold'>
                                    Drivers License.png
                                </p>
                                <button className='text-[#85BC2C]'>
                                    View File
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <span className='flex justify-between'>
                    <button type="button"
                        className=" px-4 py-3 mb-4 rounded-md border border-[#E93C3C] bg-[#E93C3C] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#E93C3C] focus:outline-none focus:ring active:text-[#E93C3C]">
                        Disapprove Upgrade
                    </button>
                    <button type="button"
                        className=" px-4 py-3 mb-4 rounded-md border border-[#40DD7F] bg-[#40DD7F] text-sm font-medium text-white transition hover:bg-transparent hover:text-[#40DD7F] focus:outline-none focus:ring active:text-[#40DD7F]">
                        Approve Upgrade
                    </button>
                </span>
            </div>
        </section >
    )
}

export default CardDetails