import React from "react"
import CurveChart from "../../assets/Curve-Chart.png";


const WalletExpenses = () => {
    return (
        <section className="flex-1">
            <div className="border bg-white p-4 w-full h-full shadow-md text-[#32475CDE] rounded-lg relative flex flex-col justify-between">
                <span className="text-center">
                    <p className="text-base text-[#32475C99] font-bold">Wallet Expenses</p>
                    <img src={CurveChart} className="mx-auto" alt="Curve Chart" />
                    <p className="text-base text-[#32475C99] font-bold">N21k Expenses more than last month</p>
                </span>
            </div>
        </section>
    )
}

export default WalletExpenses