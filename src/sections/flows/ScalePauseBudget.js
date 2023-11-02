import React, { useState } from 'react';
import CardBullet1 from '../../../public/ScaleA.png';
import CardBullet2 from '../../../public/DecreaseA.png';
import CardBullet3 from '../../../public/PauseA.png';
import CardBullet4 from '../../../public/ScaleA.png';
import Image from 'next/image';
import GreyLine from "@/components/scalepausebudget/GreyLine";

const ScalePauseBudget = () => {
    const [selectedTextBox, setSelectedTextBox] = useState(1);

    const handleTextBoxClick = (textBoxNumber) => {
        if (selectedTextBox !== textBoxNumber) {
            setSelectedTextBox(textBoxNumber);
        }
    };

    return (
        <div className={'SPB-wrapper'} id={'SPB'}>
            <div className={'SPB-upper-section'}>
                <div className={'SPB-upper-texts'}>
                    <div className={'SPB-green-line'}>
                        <p className={'SPB-green-text'}>Automate everything</p>
                    </div>
                    <p className={'SPB-heading'}>Maximize outcomes, minimize effort</p>
                    <p className={'SPB-subtitle'}>
                        Everything you do while running ads in TikTok ads manager, we do it better.
                    </p>
                </div>
                <div className={'SPB-grey-line'}>
                    <GreyLine/>
                </div>
            </div>

            <div className={'SPB-lower-section'}>
                <div className={'SPB-left-textboxes'}>
                    <div
                        className={`SPB-text-box ${selectedTextBox === 1 ? 'selected' : ''}`}
                        onClick={() => handleTextBoxClick(1)}
                    >
                        <p  className={"SPB-image-heading"}
                            style={selectedTextBox === 1 ? { color: '#06ad85' } : {}}>Scale</p>
                        <p className={"SPB-image-subheading"}> Lorem Ipsum sit amet this is a dummy paragraph</p>
                        <div className={"SPB-green-line-second"}></div>
                    </div>
                    <div
                        className={`SPB-text-box ${selectedTextBox === 2 ? 'selected' : ''}`}
                        onClick={() => handleTextBoxClick(2)}
                    >
                        <p  className={"SPB-image-heading"}
                            style={selectedTextBox === 2 ? { color: '#06ad85' } : {}}>Pause</p>
                        <p className={"SPB-image-subheading"}> Lorem Ipsum sit amet this is a dummy paragraph</p>
                        <div className={"SPB-green-line-second"}></div>
                    </div>
                </div>

                <div className={"SPB-image-wrapper"}>
                    <Image
                        className={'SPB-image'}
                        src={
                            selectedTextBox === 1
                                ? CardBullet1
                                : selectedTextBox === 2
                                    ? CardBullet2
                                    : selectedTextBox === 3
                                        ? CardBullet3
                                        : CardBullet4
                        }
                        alt="Image"
                        height={500}
                    />
                </div>

                <div className={'SPB-right-textboxes'}>
                    <div
                        className={`SPB-text-box ${selectedTextBox === 3 ? 'selected' : ''}`}
                        onClick={() => handleTextBoxClick(3)}
                    >
                        <p  className={"SPB-image-heading"}
                            style={selectedTextBox === 3 ? { color: '#06ad85' } : {}}>Adjust Budget</p>
                        <p className={"SPB-image-subheading"}> Lorem Ipsum sit amet this is a dummy paragraph</p>
                        <div className={"SPB-green-line-second"}></div>
                    </div>
                    <div
                        className={`SPB-text-box ${selectedTextBox === 4 ? 'selected' : ''}`}
                        onClick={() => handleTextBoxClick(4)}
                    >
                        <p  className={"SPB-image-heading"}
                            style={selectedTextBox === 4 ? { color: '#06ad85' } : {}}>All in 1</p>
                        <p className={"SPB-image-subheading"}> Lorem Ipsum sit amet this is a dummy paragraph</p>
                        <div className={"SPB-green-line-second"}></div>
                    </div>
                </div>
            </div>

            <div className={"SPB-disclaimer-text"}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
            </div>
        </div>
    );
};

export default ScalePauseBudget;
