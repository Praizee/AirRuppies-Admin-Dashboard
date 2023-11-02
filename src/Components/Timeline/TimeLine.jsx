import React from 'react'

const TimeLine = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div className="flex-1">
                <div className="relative px-4">
                    <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                    {/* <!-- start::Timeline item --> */}
                    <div className="flex items-center w-full mt-6 mb-4 -ml-1.5">
                        <div className="w-1/12 z-10">
                            <div className="w-3.5 h-3.5 bg-[#FF3E1D] rounded-full"></div>
                        </div>
                        <div className="w-11/12">
                            <span className='tablet:flex justify-between'>
                                <p className="text-[1rem]">
                                    Profile informations changed.
                                </p>
                                <p className="text-xs text-gray-500">12 min ago</p>
                            </span>
                            <p className="text-xs text-gray-500">
                                Failed transactions have been paid
                            </p>
                        </div>
                    </div>
                    {/* <!-- end::Timeline item --> */}

                    {/* <!-- start::Timeline item --> */}
                    <div className="flex items-center w-full my-6 -ml-1.5">
                        <div className="w-1/12 z-10">
                            <div className="w-3.5 h-3.5 bg-[#696CFF] rounded-full"></div>
                        </div>
                        <div className="w-11/12">
                            <span className='tablet:flex justify-between'>
                                <p className="text-[1rem]">
                                    Create new savings plan
                                </p>
                                <p className="text-xs text-gray-500">45 min ago</p>
                            </span>
                            <p className="text-xs text-gray-500">
                                Target Savings
                            </p>
                        </div>
                    </div>
                    {/* <!-- end::Timeline item --> */}

                    {/* <!-- start::Timeline item --> */}
                    <div className="flex items-center w-full my-6 -ml-1.5">
                        <div className="w-1/12 z-10">
                            <div className="w-3.5 h-3.5 bg-[#FFAB00] rounded-full"></div>
                        </div>
                        <div className="w-11/12">
                            <span className='tablet:flex justify-between'>
                                <p className="text-[1rem]">
                                    Add new roles and permissions
                                </p>
                                <p className="text-xs text-gray-500">2 days ago</p>
                            </span>
                            <p className="text-xs text-gray-500">
                                5 new roles and permission added
                            </p>
                        </div>
                    </div>
                    {/* <!-- end::Timeline item --> */}

                    {/* <!-- start::Timeline item --> */}
                    <div className="flex items-center w-full my-6 -ml-1.5">
                        <div className="w-1/12 z-10">
                            <div className="w-3.5 h-3.5 bg-[#03C3EC] rounded-full"></div>
                        </div>
                        <div className="w-11/12">
                            <span className='tablet:flex justify-between'>
                                <p className="text-[1rem]">
                                    Remove an admin
                                </p>
                                <p className="text-xs text-gray-500">5 days ago</p>
                            </span>
                            <p className="text-xs text-gray-500">
                                John removed from admin panel
                            </p>
                        </div>
                    </div>
                    {/* <!-- end::Timeline item --> */}
                </div>
            </div>
        </div>
    )
}

export default TimeLine