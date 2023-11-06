import React from "react";
import WalletChart from "../../assets/Wallet-Chart.png"

const WalletBalance = () => {
    return (
        <section className="">
            <div className="">
                <div className="border my-4 bg-white shadow-md text-[#32475CDE] p-4 rounded-lg relative">
                    <div className="flex gap-2">
                        <span className="">
                            <span className="">
                                <p className="text-[1.25rem] font-black">
                                    Wallet Balance
                                </p>
                                <p className="text-[#E89806] w-max bg-[#FDB5281F] py-1 px-2 rounded-full">
                                    Year 2023
                                </p>
                            </span>

                            <span className="">
                                <p className="text-[#40DD7F] mt-14 text-[0.9375rem] font-bold">
                                    ↑ 68.2%
                                </p>
                                <h2 className="text-[1.5rem] mt-2 font-black">
                                    N84,686k
                                </h2>
                            </span>
                        </span>

                        <span>
                            <img src={WalletChart} className="" alt="wallet-chart" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WalletBalance;
