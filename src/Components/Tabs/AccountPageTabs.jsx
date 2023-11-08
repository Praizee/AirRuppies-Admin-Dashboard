import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PersonalDetailsTab from '../../Pages/Account/PersonalDetailsTab';
import CardKycTab from '../../Pages/Account/CardKycTab';
import ReferralTab from '../../Pages/Account/ReferralTab';
import BonusTab from '../../Pages/Account/BonusTab';
import SecurityTab from '../../Pages/Account/SecurityTab';


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

export default function AccountPageTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Tabs>
            <TabList className="border-b bg-white py-4 px-2 rounded-t-lg">
                <Tab selectedClassName="bg-[#F0F6E9] text-[#40DD7F] rounded-lg border">
                    <span className='flex gap-2 text-[0.875rem]'>
                        Personal  Detail
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#F0F6E9] text-[#40DD7F] rounded-lg border">
                    <span className='flex gap-2 text-[0.875rem]'>
                        Card KYC
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#F0F6E9] text-[#40DD7F] rounded-lg border">
                    <span className='flex gap-2 text-[0.875rem]'>
                        Referrals
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#F0F6E9] text-[#40DD7F] rounded-lg border">
                    <span className='flex gap-2 text-[0.875rem]'>
                        Bonus
                    </span>
                </Tab>
                <Tab selectedClassName="bg-[#F0F6E9] text-[#40DD7F] rounded-lg border">
                    <span className='flex gap-2 text-[0.875rem]'>
                        Security
                    </span>
                </Tab>
            </TabList>

            <TabPanel>
                <PersonalDetailsTab />
            </TabPanel>
            <TabPanel>
                <CardKycTab />
            </TabPanel>
            <TabPanel>
                <ReferralTab />
            </TabPanel>
            <TabPanel>
                <BonusTab />
            </TabPanel>
            <TabPanel>
                <SecurityTab />
            </TabPanel>
        </Tabs>

    );
}