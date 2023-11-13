import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
        .endOf('week')
        .format(weekFormat)}`;

const BasicDatePicker = () => (
    <Space direction="vertical" size={12}>
        <DatePicker
            defaultValue={dayjs()}
            format={dateFormatList}
            // defaultValue={dayjs('01/01/2023', dateFormatList[0])}
            className='p-2 rounded-md border-gray-200 
            shadow-sm focus-within:border-[#551B73] hover:border-[#551B73] 
            focus-within:ring-1 focus-within:ring-[#551B73]'
        />
    </Space>
);
export default BasicDatePicker;