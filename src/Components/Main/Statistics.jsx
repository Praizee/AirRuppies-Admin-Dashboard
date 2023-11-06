import React, { useState } from "react";
import { BiUser, BiUserVoice } from "react-icons/bi";
import { LuUserPlus, LuUsers } from "react-icons/lu";

const Statistics = () => {

    return (
        <section className="text-[#32475CDE]">
            <div className="">

                <div className="relative grid tablet:w- w-full laptop:grid-cols-4 tablet:grid-cols-3 grid-cols-1 gap-4">

                    <div className="border flex justify-between bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-[1rem] font-semibold">
                                Total Users
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    21,459
                                </h2>
                                <p className="text-[#40DD7F] py-1 text-[0.875rem] font-bold">
                                    (+29%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-[0.725rem] font-medium">
                                    Total Users In AirRuppies
                                </p>
                            </span>
                        </span>
                        <span className="p-0 bg-">
                            <BiUser className="h-10 w-10 text-[#3C1450] bg-[#3C1450]/10 rounded-lg p-2" />
                        </span>
                    </div>

                    <div className="border flex justify-between bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-[1rem] font-semibold">
                                Total Inactive Users
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    4,567
                                </h2>
                                <p className="text-[#40DD7F] py-1 text-[0.875rem] font-bold">
                                    (+18%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-[0.725rem] font-medium">
                                    Last week analytics
                                </p>
                            </span>
                        </span>

                        <span className="p-0 bg-">
                            <LuUserPlus className="h-10 w-10 text-[#E93C3C] bg-[#E93C3C]/10 rounded-lg p-2" />
                        </span>
                    </div>

                    <div className="border flex justify-between bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-[1rem] font-semibold">
                                Active Users
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    19,860
                                </h2>
                                <p className="text-[#E93C3C] py-1 text-[0.875rem] font-bold">
                                    (-14%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-[0.725rem] font-medium">
                                    Last week analytics
                                </p>
                            </span>
                        </span>

                        <span className="p-0 bg-">
                            <LuUsers className="h-10 w-10 text-[#40DD7F] bg-[#40DD7F]/10 rounded-lg p-2" />
                        </span>
                    </div>

                    <div className="border flex justify-between bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-[1rem] font-semibold">
                                Blocked Accounts
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    237
                                </h2>
                                <p className="text-[#E93C3C] py-1 text-[0.875rem] font-bold">
                                    (+42%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-[0.725rem] font-medium">
                                    Last week analytics
                                </p>
                            </span>
                        </span>

                        <span className="p-0 bg-">
                            <BiUserVoice className="h-10 w-10 text-[#E89806] bg-[#E89806]/10 rounded-lg p-2" />
                        </span>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Statistics;
