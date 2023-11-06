import React, { useState } from "react";
import GrowthChart from "../../assets/Growth-Chart.png"
import { BiWallet } from "react-icons/bi";
import { TbLetterN } from "react-icons/tb";

const Growth = () => {

    return (
        <section className="text-[#32475C99]">
            <div className="">
                <div className="px-2 bg-white text-center min-w-[15rem] mt-8 laptop:mt-0">
                    <select
                        name="year"
                        id="year"
                        // value={}
                        // onChange={}
                        defaultValue="2023"
                        className="text-[1rem] p-3 border-2 border-[#3C1450] rounded-lg font-bold">
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>

                    <span className="">
                        <img src={GrowthChart} className="mx-auto my-4" alt="growth-chart" />
                    </span>

                    <span className="mt-10">
                        <h2 className="text-[1.5rem] font-bold">
                            78%
                        </h2>
                        <p className="">
                            Growth
                        </p>
                    </span>
                    <p className="font-semibold">
                        62% Company Growth
                    </p>
                    <div className="mt-8 flex justify-between text-[#32475CDE]">
                        <span className="flex gap-4 text-left">
                            <span className="py-1">
                                <TbLetterN className="w-8 h-8 text-black bg-[#666CFF1F] p-1 rounded-lg" />
                            </span>
                            <span>
                                <p className="text-[0.875rem]">
                                    2023
                                </p>
                                <p className="text-base font-bold">
                                    N32.5k
                                </p>
                            </span>
                        </span>
                        <span className="flex gap-4 text-left">
                            <span className="py-1">
                                <BiWallet className="w-8 h-8 text-[#03C3EC] bg-[#26C6F91F] p-1 rounded-lg" />
                            </span>
                            <span>
                                <p className="text-[0.875rem]">
                                    2022
                                </p>
                                <p className="text-base font-bold">
                                    N41.2k
                                </p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Growth;
