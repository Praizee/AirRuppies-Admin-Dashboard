import React, { useState } from "react";

const Statistics = () => {

    return (
        <section className="text-black">
            <div className="">

                <div className="relative grid tablet:w- w-max laptop:grid-cols-4 tablet:grid-cols-3 grid-cols-1 gap-4">

                    <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                        <p className="text-[0.625rem] font-medium">
                            Total Users
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                21,224
                            </h2>
                            <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                                ↓ 0.7%
                            </p>
                        </span>
                        <span className="">
                            <p className="text-[0.725rem] font-semibold">
                                Total Users In AirRuppies
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                        <p className="text-[0.625rem] font-medium">
                            Total Inactive Users
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                129324
                            </h2>
                            <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                                ↓ 8.5%
                            </p>
                        </span>
                        <span className="">
                            <p className="text-[0.725rem] font-semibold">
                                Last week analytics
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                        <p className="text-[0.625rem] font-medium">
                            Active Users
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                324
                            </h2>
                            <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                                ↓ 8.5%
                            </p>
                        </span>
                        <span className="">
                            <p className="text-[0.725rem] font-semibold">
                                Last week analytics
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                        <p className="text-[0.625rem] font-medium">
                            Blocked Accounts
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                324
                            </h2>
                            <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                                ↓ 8.5%
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
