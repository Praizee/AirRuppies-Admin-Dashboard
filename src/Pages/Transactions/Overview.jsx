import React from 'react'
import TransactionsStatistics from "./TransactionsStatistics"
import TransactionsTable from "./TransactionsTable"
import TopUsersTable from "./TopUsersTable"
import Revenue from './Revenue'
import Profit from './Profit'
import WalletExpenses from './WalletExpenses'
import TotalIncomeGraph from './TotalIncomeGraph'
import Transactions_S from './Transactions_S'

const Overview = () => {
    return (
        <section>
            <div className="container pt-12 pb-0">
                <span className=''>
                    <h1 className="text-[1.5rem] mt-4 text-[#2E2E3A] leading-normal font-bold">
                        Transactions
                    </h1>
                    <p className='text-[#32475C99] font-semibold'>
                        Showing your  transactions metrics for July 16,2023 - July 25,2023
                    </p>
                </span>

                <div className='py-4'>
                    <TransactionsStatistics />
                </div>

                <div className="laptop:flex gap-4">
                    <div className="space-y-4">
                        <div className="flex gap-4 justify-between laptop:space-y-0 laptop:mt-0">
                            <Revenue />
                            <Profit />
                        </div>

                        <div className="flex gap-4 justify-between laptop:space-y-0 laptop:mt-0">
                            <WalletExpenses />
                            <Transactions_S />
                        </div>
                    </div>
                    <div className='mt-4 laptop:mt-0'>
                        <TotalIncomeGraph />
                    </div>
                </div>

                <div className='laptop:flex justify-between gap-4'>
                    <div className='bg-white w-full rounded-lg overflow-x-aut mt-8 p-0 shadow-md'>
                        <TopUsersTable />
                    </div>
                    <div className='bg-white laptop:min-w-max rounded-lg overflow-x-auto mt-8 p-0 shadow-md'>
                        <TransactionsTable />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Overview