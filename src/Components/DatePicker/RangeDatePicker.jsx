import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
    <Space direction="vertical" size={10}>
        {/* <DatePicker renderExtraFooter={() => 'extra footer'} /> */}
        {/* <DatePicker renderExtraFooter={() => 'extra footer'} showTime /> */}
        <RangePicker className='border-[#D6DDEB]' />
        {/* <RangePicker renderExtraFooter={() => 'extra footer'} showTime /> */}
        {/* <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" /> */}
    </Space>
);
export default App;