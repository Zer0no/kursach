import React from "react";
import HeaderPart from "./components/header";
import AboutUsPart from "./components/about";
import OurFriendsPart from "./components/ourFriends";
import OurLifePart from "./components/ourLife";
import AdvantagesPart from "./components/advantages";
import DonationPart from "./components/donation";
import QuestionsPart from "./components/questions";
import StatisticPart from "./components/statistic";
import FooterPart from "./components/footer";


function Landing(){
    return <div>
        <HeaderPart/>
        <AboutUsPart/>
        <OurFriendsPart/>
        <OurLifePart />
        <AdvantagesPart />
        <DonationPart />
        <QuestionsPart />
        <StatisticPart />
        <FooterPart />
    </div>;
}

export default Landing;