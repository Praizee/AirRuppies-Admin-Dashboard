import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../Context/AppContext';
import SettingsTabs from '../../Components/Tabs/SettingsTabs';


const Settings = () => {
    const { user } = useAppContext();

    return (
        <div className="container pt-20 pb-0">

            <SettingsTabs />

        </div>
    )
}

export default Settings
