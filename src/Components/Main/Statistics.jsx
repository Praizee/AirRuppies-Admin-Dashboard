import React, { useState } from "react";

const Statistics = () => {

    return (
        <section className="text-black">
            <div className="">

                <div className="relative grid tablet:w- w-max laptop:grid-cols-4 tablet:grid-cols-3 grid-cols-1 gap-4">

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <p className="text-[1rem] font-medium">
                            Total Users
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                21,459
                            </h2>
                            <p className="text-[#40DD7F] py-1 text-[0.9375rem] font-bold">
                                (+29%)
                            </p>
                        </span>
                        <span className="">
                            <p className="text-[0.725rem] font-semibold">
                                Total Users In AirRuppies
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <p className="text-[1rem] font-medium">
                            Total Inactive Users
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                4,567
                            </h2>
                            <p className="text-[#40DD7F] py-1 text-[0.9375rem] font-bold">
                                (+18%)
                            </p>
                        </span>
                        <span className="">
                            <p className="text-[0.725rem] font-semibold">
                                Last week analytics
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <p className="text-[1rem] font-medium">
                            Active Users
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                19,860
                            </h2>
                            <p className="text-[#E93C3C] py-1 text-[0.9375rem] font-bold">
                                (-14%)
                            </p>
                        </span>
                        <span className="">
                            <p className="text-[0.725rem] font-semibold">
                                Last week analytics
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 shadow-md rounded-lg space-y-1 relative">
                        <p className="text-[1rem] font-medium">
                            Blocked Accounts
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                237
                            </h2>
                            <p className="text-[#E93C3C] py-1 text-[0.9375rem] font-bold">
                                (+42%)
                            </p>
                        </span>
                        <span className="">
                            <p className="text-[0.725rem] font-semibold">
                                Last week analytics
                            </p>
                        </span>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Statistics;
