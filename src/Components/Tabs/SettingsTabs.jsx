import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BiUser, BiLock, BiBell, BiLink } from "react-icons/bi";
import AccountsTab from '../../Pages/Settings/AccountsTab';
import SecurityTab from '../../Pages/Settings/SecurityTab';
import NotificationsTab from '../../Pages/Settings/NotificationsTab';
import MaintenanceTab from '../../Pages/Settings/MaintenanceTab';
import MiscellaneousTab from '../../Pages/Settings/MiscellaneousTab';
import TierTab from '../../Pages/Settings/TierTab';
import ChargesTab from '../../Pages/Settings/ChargesTab';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SettingsTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Tabs>
            <TabList>
                <Tab selectedClassName="bg-[#3C1450] text-white rounded-t-lg border">
                    <span className='flex gap-2 uppercase text-[0.875rem]'>
                        <BiUser className='h-4 w-4 mt-1' /> Account
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#3C1450] text-white rounded-t-lg border">
                    <span className='flex gap-2 uppercase text-[0.875rem]'>
                        <BiLock className='h-4 w-4 mt-1' /> Security
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#3C1450] text-white rounded-t-lg border">
                    <span className='flex gap-2 uppercase text-[0.875rem]'>
                        <BiBell className='h-4 w-4 mt-1' /> Notification
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#3C1450] text-white rounded-t-lg border">
                    <span className='flex gap-2 uppercase text-[0.875rem]'>
                        <BiLink className='h-4 w-4 mt-1' /> Maintenance Mode
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#3C1450] text-white rounded-t-lg border">
                    <span className='flex gap-2 uppercase text-[0.875rem]'>
                        <BiLink className='h-4 w-4 mt-1' /> Miscellaneous
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#3C1450] text-white rounded-t-lg border">
                    <span className='flex gap-2 uppercase text-[0.875rem]'>
                        <BiLink className='h-4 w-4 mt-1' /> Tier
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#3C1450] text-white rounded-t-lg border">
                    <span className='flex gap-2 uppercase text-[0.875rem]'>
                        <BiLink className='h-4 w-4 mt-1' /> Charges
                    </span>
                </Tab>
            </TabList>

            <TabPanel>
                <AccountsTab />
            </TabPanel>
            <TabPanel>
                <SecurityTab />
            </TabPanel>
            <TabPanel>
                <NotificationsTab />
            </TabPanel>
            <TabPanel>
                <MaintenanceTab />
            </TabPanel>
            <TabPanel>
                <MiscellaneousTab />
            </TabPanel>
            <TabPanel>
                <TierTab />
            </TabPanel>
            <TabPanel>
                <ChargesTab />
            </TabPanel>
        </Tabs>

    );
}