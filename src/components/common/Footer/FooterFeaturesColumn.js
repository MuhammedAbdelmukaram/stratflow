import React from 'react';
import Link from "next/link";

const FooterFeaturesColumn = () => {
    return (
        <div>
            <div className={"single-footer-column"}>
                <p className={"footer-column-heading"}>Features</p>

                <div className={"single-footer-subheading"}>
                    <Link href="flows" className="footer-subheading-text">
                        <p className="small-footer-link">Flows</p>
                    </Link>
                </div>

                <div className={"single-footer-subheading"}>
                    <Link href="strategies" className="footer-subheading-text">
                        <p className="small-footer-link">Strategies</p>
                    </Link>
                </div>

                {/*<div className={"single-footer-subheading"}>
                    <Link href="analytics" className="footer-subheading-text">
                        <p className="small-footer-link">Analytics</p>
                    </Link>
                </div>*/}
                <div className={"single-footer-subheading"}>
                    <Link href="/flows#SPB" className="footer-subheading-text">
                        <p className="small-footer-link">Scale/Pause/Time</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterFeaturesColumn;
