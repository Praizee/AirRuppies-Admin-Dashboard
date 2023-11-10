import React from 'react'
import RevenueChart from "../../assets/Revenue-Chart.png"
import Days from "../../assets/Days.png"

const Revenue = () => {
    return (
        <section className="flex-">
            <div className="border bg-white shadow-lg text-[#32475CDE] rounded-lg space-y-1 relative">
                <span>
                    <p className="text-[1rem] px-4 pt-4 font-bold">Revenue</p>
                    <h2 className="text-[1.5rem] px-4 py-0 font-black">N425k</h2>
                </span>

                <span className="p-0">
                    <img src={RevenueChart} className="p-0" alt="income-chart" />
                    <img src={Days} className="p-0" alt="days" />
                    {/* <p className='text-[#32475C61] text-[0.75rem] font-semibold text-center'>
            M T W T F S S
          </p> */}
                </span>
            </div>
        </section>
    )
}

export default Revenue
