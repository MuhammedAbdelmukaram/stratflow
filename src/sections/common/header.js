import React from 'react';
import AnnouncementBar from "@/components/common/announcementBar";
import HeaderContent from "@/components/common/header";
import ProductsComponent from "@/components/common/ProductsComponent";
import ResourcesComponent from "@/components/common/ResourcesComponent";
import IntegrationsComponent from "@/components/common/IntegrationsComponent";



const Header = () => {
    const hoverMenus = [
        { label: 'Products', component: <ProductsComponent /> },
        { label: 'Resources', component: <ResourcesComponent /> },
        { label: 'Integrations', component: <IntegrationsComponent /> },
    ];
    return (
        <div style={{zIndex:0}}>
            <AnnouncementBar />
            <HeaderContent hoverMenus={hoverMenus} />


        </div>
    );
};

export default Header;
