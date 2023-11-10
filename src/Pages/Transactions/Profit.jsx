import React from 'react'
import TransactionsProfitChart from "../../assets/TransactionsProfitChart.png"
import Days from "../../assets/Days.png"

const Profit = () => {
    return (
        <section className="flex-1">
            <div className="border bg-white w-full h-full shadow-lg p-4 text-[#32475CDE] rounded-lg relative flex flex-col justify-between">
                <span>
                    <p className="text-base font-bold">Profit</p>
                    <h2 className="text-[1.5rem] font-black">624k</h2>
                </span>
                <img src={TransactionsProfitChart} alt="income-chart" className="mx-auto" />
                {/* <p className='text-[#32475C61] text-[0.75rem] font-semibold text-center'>
                            M T W T F S S
                        </p> */}
            </div>
        </section>
    )
}

export default Profit
