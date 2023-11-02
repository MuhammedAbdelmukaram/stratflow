import React from 'react';
import Link from "next/link";

const FooterResourcesColumn = () => {
    return (
        <div>
            <div className={"single-footer-column"}>
                <p className={"footer-column-heading"}>Resources</p>

                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Blog</p>
                    </Link>
                </div>

                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Experts</p>
                    </Link>
                </div>

                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Community</p>
                    </Link>
                </div>
                <div className={"single-footer-subheading"}>
                    <Link href="/signup"  className="footer-subheading-text">
                        <p className="small-footer-link">Cheat-sheet</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterResourcesColumn;
