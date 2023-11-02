import React from 'react';
import Link from "next/link";

const FooterIntegrationsColumn = () => {
    return (
        <div>
            <div className={"single-footer-column"}>
                <p className={"footer-column-heading"}>Integrations</p>

                <div className={"single-footer-subheading"}>
                    <Link href="/integrations" className="footer-subheading-text">
                        <p className="small-footer-link">TikTok ads</p>
                    </Link>
                </div>

                <div className={"single-footer-subheading"}>
                    <Link href="/integrations" className="footer-subheading-text">
                        <p className="small-footer-link">Slack</p>
                    </Link>
                </div>

                <div className={"single-footer-subheading"}>
                    <Link href="/integrations" className="footer-subheading-text">
                        <p className="small-footer-link">Google sheets</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterIntegrationsColumn;
