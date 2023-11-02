import React from 'react'

const Revenue = () => {
    return (
        <section className="">
            <div className="">
                <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                    <p className="text-[0.625rem] font-medium">
                        WALLET BALANCE
                    </p>
                    <span className="flex gap-4">
                        <h2 className="text-[1.25rem] font-bold">
                            21,224
                        </h2>
                        <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                            ↓ 0.7%
                        </p>
                    </span>
                    <span className="flex space-x-1">
                        <p className="text-[#00D88A] font-semibold text-[0.725rem]">
                            +17 New
                        </p>
                        <p className="text-[0.725rem] font-semibold">
                            customers compared to yesterday
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Revenue