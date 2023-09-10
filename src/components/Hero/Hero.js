import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br/>
                    My Portfolio
                </SectionTitle>
                <SectionText>
                    I design and code beautifully simple things and i love what i do. Just simple like that!
                </SectionText>
                <Button onClick={() => window.location = '/#projects'}>Learn More</Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;