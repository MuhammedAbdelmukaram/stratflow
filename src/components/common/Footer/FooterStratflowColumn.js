import React from 'react';
import Link from "next/link";
import "../../../assets/footer.css"
const FooterStratflowColumn = () => {
    return (
        <div>
            <div className={"single-footer-column"}>
                <p className={"footer-column-heading"}>Stratflow</p>

                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Careers</p>
                    </Link>
                </div>

                <div className={"single-footer-subheading"}>
                <Link href="/signup"  className="footer-subheading-text">
                    <p className="small-footer-link">Help</p>
                </Link>
                </div>

                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Pricing</p>
                    </Link>
                </div>
                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Contact us</p>
                    </Link>
                </div>
                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Affiliate Program</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterStratflowColumn;
