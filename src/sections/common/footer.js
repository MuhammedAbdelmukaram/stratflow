import React from 'react';
import "../../assets/footer.css"
import Link from "next/link";
import Image from "next/image";
import FooterStratflowColumn from "@/components/common/Footer/FooterStratflowColumn";
import FooterFeaturesColumn from "@/components/common/Footer/FooterFeaturesColumn";
import FooterResourcesColumn from "@/components/common/Footer/FooterResourcesColumn";
import FooterIntegrationsColumn from "@/components/common/Footer/FooterIntegrationsColumn";
import FooterLogo from "../../../public/footerlogo.png"
import Facebook from "../../../public/footerfacebook.png"
import Twitter from "../../../public/footertwitter.png"
import Youtube from "../../../public/footeryoutube.png"
import Discord from "../../../public/footerdiscord.png"

const Footer = () => {
    return (
        <div className={"footer-wrapper"}>
            <div className={"footer-upper-section-wrapper"}>
                <div className={"footer-left-section"}>
                    <Image
                        className={"footer-stratflow-image"}
                    src={FooterLogo}
                    height={100}
                    alt={"footer logo"}>
                    </Image>

                    <div className={"follow-us-wrapper"}>
                        <p className={"footer-follow-us"}>Follow us:</p>
                        <div className={"footer-icons"}>
                            <Link href="https://facebook.com">
                                <div className={"footer-black-circle"}>
                                    <Image
                                    src={Facebook}
                                    height={24}
                                    alt={"facebook logo"}></Image>
                                </div>
                            </Link>
                            <Link href="https://twitter.com">
                                <div className={"footer-black-circle"}>
                                    <Image
                                    src={Twitter}
                                    height={24}
                                    alt={"twitter logo"}></Image>
                                </div>
                            </Link>
                            <Link href="https://youtube.com">
                                <div className={"footer-black-circle"}>
                                    <Image
                                    src={Youtube}
                                    height={24}
                                    alt={"youtube logo"}></Image>
                                </div>
                            </Link>
                            <Link href="https://discord.com">
                                <div className={"footer-black-circle"}>
                                    <Image
                                    src={Discord}
                                    height={24}
                                    alt={"discord logo"}></Image>
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>
                <div className={"footer-columns-wrapper"}>
                    <FooterStratflowColumn/>
                    <FooterFeaturesColumn/>
                    <FooterResourcesColumn/>
                    <FooterIntegrationsColumn/>
                </div>
            </div>

            <div className={"footer-lower-section"}>

                <p className={"footer-stratflow-inc"}>&copy; 2022 StratFlow Inc.</p>

                <div className={"single-footer-lower-subheading"}>
                    <Link href="strategies" className="footer-lower-subheading-text">
                        <p className="small-footer-link">Manage Cookies</p>
                    </Link>
                </div>
                <div className={"single-footer-lower-subheading"}>
                    <Link href="strategies" className="footer-lower-subheading-text">
                        <p className="small-footer-link">Legal</p>
                    </Link>
                </div>
                <div className={"single-footer-lower-subheading"}>
                    <Link href="strategies" className="footer-lower-subheading-text">
                        <p className="small-footer-link">Privacy</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Footer;
