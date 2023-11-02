import React from 'react';
import SingleExpert from "@/components/experts/SingleExpert";
import Human1 from '../../../public/human1.png'
import Human2 from '../../../public/human2.png'
import Human3 from '../../../public/human3.png'
import Human4 from '../../../public/human4.png'
import Company1 from '../../../public/Company1.png'
import Company2 from '../../../public/Company2.png'
import Company3 from '../../../public/Company3.png'
import Company4 from '../../../public/Company4.png'
const ExpertsList = () => {
    return (
        <div className={"experts-container"}>
             <div className={"experts-single-row"}>
                <SingleExpert
                    person={Human1}
                    personName={"Josh Greboza, CEO - Bee Colony"}
                    text={"People say time is money and it is an understatement. Whether you are trying to scale your ads, or simply decided to automate some of the tasks you do during the day on ads manager, the only way to attain larger profits is to off-source time consuming tasks, preferably to non-human."}
                    company={Company3}
                />
                <SingleExpert
                    person={Human2}
                    personName={"Anne White, CEO - Grinch Media"}
                    text={"Every minute counts, especially in advertising. If you're looking to elevate your campaigns or simplify tasks on the ads manager, consider automation. It's the bridge to greater efficiency and profitability."}
                    company={Company2}
                />
            </div>

            <div className={"experts-single-row"}>
                <SingleExpert
                    person={Human3}
                    personName={"Basu Supran, Ad Et"}
                    text={"Time and money are two sides of the same coin. Whether you're ramping up your ads or seeking efficiency in daily tasks on the ads manager, automation can be your ticket to better returns."}
                    company={Company1}
                />
                <SingleExpert
                    person={Human4}
                    personName={"James Michael, CEO - Cashing INC"}
                    text={"Harnessing the power of automation can redefine how we view time in the advertising realm. By offloading routine tasks, especially on the ads manager, we pave the way for enhanced profitability."}
                    company={Company4}
                />
            </div>


        </div>


    );
};

export default ExpertsList;
