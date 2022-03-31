import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">

                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Bootstrap'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Material ui'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'ES6'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'C++'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Express.js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MongoDB'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Web Design'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />


            </div>

        </div>
    )
}

export default AboutPage;
