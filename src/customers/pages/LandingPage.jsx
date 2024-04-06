import React from "react";
import ACarousel from "../components/carousel/ACarousel";
import Sectioncarousel from "../components/sectioncarousel/SectionCarousel";
// import SectionCard from "../components/sectioncard/SectionCard";

const LandingPage = () => {
    return (
        <div>
            <ACarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <Sectioncarousel/>
                <Sectioncarousel/>
                <Sectioncarousel/>
                <Sectioncarousel/>
                <Sectioncarousel/>
            </div>
        </div>
    );
}
export default LandingPage;