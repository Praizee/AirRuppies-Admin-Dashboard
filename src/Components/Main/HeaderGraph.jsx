import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChartTop from "../../assets/Chart-top.png"
import ChartBottom from "../../assets/Chart-bottom.png"
import Growth from "./Growth";

const Headerchart = () => {

    return (
        <section className="text-[#32475CDE]">
            <div className="">
                <div className="p-4 laptop:flex gap-4 bg-white shadow-md rounded-lg">

                    <div className="border border-l-transparent border-y-transparent">
                        <span className="flex justify-between">
                            <h2 className="text-[1.25rem] font-bold">
                                Total Revenue
                            </h2>
                            <button className="">
                                <BsThreeDotsVertical className="h-5 w-5 my-1" />
                            </button>
                        </span>
                        <div className="flex gap-6">
                            <div className="flex gap-3">
                                <div className="w-1/12 pt-2 z-10">
                                    <div className="w-2.5 h-2.5 bg-[#3C1450] rounded-full"></div>
                                </div>
                                <p>
                                    2022
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1/12 pt-2 z-10">
                                    <div className="w-2.5 h-2.5 bg-[#40DD7F] rounded-full"></div>
                                </div>
                                <p>
                                    2021
                                </p>
                            </div>
                        </div>


                        <div className="flex gap-6 justify-betwee mt-10">
                            <span className="space-y-6">
                                <p className="text-[0.6875rem] font-semibold">
                                    30
                                </p>
                                <p className="text-[0.6875rem] font-semibold">
                                    20
                                </p>
                                <p className="text-[0.6875rem] font-semibold">
                                    10
                                </p>
                                <p className="text-[0.6875rem] font-semibold">
                                    0
                                </p>
                                <p className="text-[0.6875rem] font-semibold">
                                    -10
                                </p>
                                <p className="text-[0.6875rem] font-semibold">
                                    -20
                                </p>
                            </span>
                            {/* Display the chart based on .... */}
                            <span className="mt-6 space-y-1">
                                <img src={ChartTop} className="w-[85%]"
                                    alt="chart-top"
                                />
                                <img src={ChartBottom} className="w-[85%]"
                                    alt="chart-bottom"
                                />
                            </span>
                            {/* end of chart */}
                        </div>
                        <div className="flex ml-10 gap-6 justify-between pr-12">
                            <span className="text-[0.6875rem] font-semibold">
                                Jan
                            </span>
                            <span className="text-[0.6875rem] font-semibold">
                                Feb
                            </span>
                            <span className="text-[0.6875rem] font-semibold">
                                Mar
                            </span>
                            <span className="text-[0.6875rem] font-semibold">
                                Apr
                            </span>
                            <span className="text-[0.6875rem] font-semibold">
                                May
                            </span>
                            <span className="text-[0.6875rem] font-semibold">
                                Jun
                            </span>
                            <span className="text-[0.6875rem] font-semibold">
                                Jul
                            </span>
                        </div>
                    </div>

                    {/* growth */}
                    <Growth />
                </div>
            </div>
        </section>
    );
};

export default Headerchart;
