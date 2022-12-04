import { SkillsItems, SkillsScreenContainer, SkillsCategoryTitle, SkillsCategory } from "./SkillsScreen.styled";
import SkillsScreenItem from "./SkillsScreenItem/SkillsScreenItem";
import { frontend, backend, other } from "../../Data/skills_data";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";

const frontendArray = frontend.map((currentSkill) => { return <SkillsScreenItem key={currentSkill.id} name={currentSkill.name} image={currentSkill.image} /> })
const backendArray = backend.map((currentSkill) => { return <SkillsScreenItem key={currentSkill.id} name={currentSkill.name} image={currentSkill.image} /> })
const otherArray = other.map((currentSkill) => { return <SkillsScreenItem key={currentSkill.id} name={currentSkill.name} image={currentSkill.image} /> })


function SkillsScreen() {
  return (
    <SkillsScreenContainer>
      <h2 className="title skills">Skills</h2>
      <SkillsItems>
        <div className="full-skills">
          <SkillsCategoryTitle>Frontend Skills</SkillsCategoryTitle>
          <SkillsCategory>
            {frontendArray}
          </SkillsCategory>
          <SkillsCategoryTitle>Backend Skills</SkillsCategoryTitle>
          <SkillsCategory>
            {backendArray}
          </SkillsCategory>
          <SkillsCategoryTitle>Other Skills</SkillsCategoryTitle>
          <SkillsCategory>
            {otherArray}
          </SkillsCategory>
        </div>

        <div className="accordion-skills">
          <Accordion allowToggle border='#E1E2E2 solid 2px' borderRadius='4px' padding='1em'>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box>🎨Front End</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" gap='20px' flexWrap='wrap'>
                {frontendArray}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box>🖧Back End</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" gap='20px' flexWrap='wrap'>
                {backendArray}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box>🏋️‍♂️Other Skills</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex" gap='20px' flexWrap='wrap'>
                {otherArray}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </SkillsItems>
    </SkillsScreenContainer>
  );
}

export default SkillsScreen;
