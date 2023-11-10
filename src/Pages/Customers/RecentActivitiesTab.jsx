import React from 'react'
import ActivitiesTimeLine from './ActivitiesTimeline';

const RecentActivitiesTab = () => {
    return (
        <section>
            <div className='bg-white p-6 rounded-b-lg shadow-lg'>
                <span className=''>
                    <p className='px-4 font-semibold'>
                        Recent Activities
                    </p>
                    <p className='px-4'>
                        This information can not  be created and edited
                    </p>
                </span>

                <ActivitiesTimeLine />
            </div>
        </section>
    )
}

export default RecentActivitiesTab