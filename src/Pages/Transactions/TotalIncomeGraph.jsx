import React from "react";
import IncomeChart from "../../assets/Transaction-Income-Chart.png";
import RangeDatePicker from "../../Components/DatePicker/RangeDatePicker";

const TotalIncomeGraph = () => {
    return (
        <section className="flex-1 text-[#32475CDE]">
            <div className="p-4 laptop:flex gap-4 bg-white shadow-md rounded-lg">
                <div className="flex-1">
                    <span className="laptop:flex justify-between">
                        <span>
                            <h2 className="text-[1.25rem] font-bold">Total Income</h2>
                            <p>Yearly report overview</p>
                        </span>
                        <button>
                            <RangeDatePicker />
                        </button>
                    </span>

                    <div className="flex gap-6 justify-between mt-10">
                        <span className="space-y-6">
                            <p className="text-[0.6875rem] font-semibold">N6k</p>
                            <p className="text-[0.6875rem] font-semibold">N5k</p>
                            <p className="text-[0.6875rem] font-semibold">N4k</p>
                            <p className="text-[0.6875rem] font-semibold">N3k</p>
                            <p className="text-[0.6875rem] font-semibold">N2k</p>
                            <p className="text-[0.6875rem] font-semibold">N1k</p>
                        </span>

                        <span className="-mt-8">
                            <img
                                src={IncomeChart}
                                className="w-full"
                                alt="chart-top"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TotalIncomeGraph;
