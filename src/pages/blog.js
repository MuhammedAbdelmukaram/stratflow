import React from 'react';
import Header from "@/sections/common/header";
import Footer from "@/sections/common/footer";
import "../assets/globals.css";
import BlogHero from "@/sections/blog/BlogHero";
const Blog = () => {
    return (
        <div>
            <Header/>
            <BlogHero/>
            <Footer/>
        </div>
    );
};

export default Blog;
