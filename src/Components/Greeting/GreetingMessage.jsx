import React from 'react';

const GreetingMessage = () => {
    // Get the current date and time
    const currentDate = new Date();
    // Get the current hour
    const currentHour = currentDate.getHours();

    let greeting = 'Hello';

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Good afternoon';
    } else if (currentHour >= 17 && currentHour < 20) {
        greeting = 'Good evening';
    } else {
        greeting = 'Hello';
    }

    return (
        <div>
            <h1 className="text-[1.5rem] font-black text-[#3C1450]">
                {greeting}
            </h1>
        </div>
    );
};

export default GreetingMessage;
