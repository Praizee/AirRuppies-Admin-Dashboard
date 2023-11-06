import React from "react"
import IncomeChart from "../../assets/Income-Chart.png"

const Income = () => {
    return (
        <section className="">
            <div className="">
                <div className="border bg-white shadow-md text-[#32475CDE] rounded-lg space-y-1 relative">
                    <span className="">
                        <p className="text-[1rem] px-4 pt-4 font-bold">
                            Income/Profit
                        </p>
                        <h2 className="text-[1.5rem] px-4 py-0 font-black">
                            N2468
                        </h2>
                    </span>

                    <span>
                        <img src={IncomeChart} className="mt-1" alt="income-chart" />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Income