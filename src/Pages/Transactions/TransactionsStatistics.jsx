import React, { useState } from "react";
import { BiUser, BiUserVoice } from "react-icons/bi";
import { LuUserPlus, LuUsers } from "react-icons/lu";

const TransactionsStatistics = () => {

    return (
        <section className="text-[#32475CDE]">
            <div className="">

                <div className="relative grid w-full laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4">

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-base font-semibold">
                                Successful Transactions
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    21,459
                                </h2>
                                <p className="text-[#40DD7F] py-1 text-sm font-bold">
                                    (+29%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-sm font-medium">
                                    Total Transactions In AirRuppies
                                </p>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-base font-semibold">
                                Failed Transactions
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    4,567
                                </h2>
                                <p className="text-[#E93C3C] py-1 text-sm font-bold">
                                    (-18%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-sm font-medium">
                                    Last week analytics
                                </p>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-base font-semibold">
                                Pending Transactions
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    19,860
                                </h2>
                                <p className="text-[#E89806] py-1 text-sm font-bold">
                                    (-14%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-sm font-medium">
                                    Last week analytics
                                </p>
                            </span>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <span>
                            <p className="text-base font-semibold">
                                Refunded Transactions
                            </p>
                            <span className="flex gap-4">
                                <h2 className="text-[1.25rem] font-black">
                                    237
                                </h2>
                                <p className="text-[#40DD7F] py-1 text-sm font-bold">
                                    (+42%)
                                </p>
                            </span>
                            <span className="">
                                <p className="text-sm font-medium">
                                    Last week analytics
                                </p>
                            </span>
                        </span>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default TransactionsStatistics;
