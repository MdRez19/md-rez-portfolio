import React from 'react';
import Section1 from "./Section1";
import Section2 from "./Section2";

const HeaderIndex = () => {
    return (
        <div className="flex flex-col justify-center lg:flex-row">
            <div className="lg:w-3/6">
                <Section1 />
            </div>
            <div className="lg:w-3/6">
                <Section2 />
            </div>
        </div>
    );
};

export default HeaderIndex;
