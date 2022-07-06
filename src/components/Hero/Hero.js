import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! <br />
          I'm Rohan Desai
        </SectionTitle>
        <SectionText>
          I love to tinker around new technologies and build fun proje
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
