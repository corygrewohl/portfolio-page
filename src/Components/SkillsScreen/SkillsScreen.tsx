import React, { useEffect, useState } from "react";
import {
  SkillsItems,
  SkillsScreenContainer,
  SkillsCategoryTitle,
  SkillsCategory,
} from "./SkillsScreen.styled";
import { frontend, backend, other } from "../../Data/skills_data";
import SkillsScreenItem from "./SkillsScreenItem/SkillsScreenItem";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function SkillsScreen() {
  return (
    <SkillsScreenContainer>
      <h2 className="title skills">Skills</h2>
      <SkillsItems>
        <div className="full-skills">
          <SkillsCategoryTitle>Frontend Skills</SkillsCategoryTitle>
          <SkillsCategory>
            {frontend.map((currentSkill) => {
              return (
                <SkillsScreenItem
                  key={currentSkill.id}
                  name={currentSkill.name}
                  image={currentSkill.image}
                />
              );
            })}
          </SkillsCategory>
          <SkillsCategoryTitle>Backend Skills</SkillsCategoryTitle>
          <SkillsCategory>
            {backend.map((currentSkill) => {
              return (
                <SkillsScreenItem
                  key={currentSkill.id}
                  name={currentSkill.name}
                  image={currentSkill.image}
                />
              );
            })}
          </SkillsCategory>
          <SkillsCategoryTitle>Other Skills</SkillsCategoryTitle>
          <SkillsCategory>
            {other.map((currentSkill) => {
              return (
                <SkillsScreenItem
                  key={currentSkill.id}
                  name={currentSkill.name}
                  image={currentSkill.image}
                />
              );
            })}
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
                {frontend.map((currentSkill) => {
                  return (
                    <SkillsScreenItem
                      key={currentSkill.id}
                      name={currentSkill.name}
                      image={currentSkill.image}
                    />
                  );
                })}
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
                {backend.map((currentSkill) => {
                  return (
                    <SkillsScreenItem
                      key={currentSkill.id}
                      name={currentSkill.name}
                      image={currentSkill.image}
                    />
                  );
                })}
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
                {other.map((currentSkill) => {
                  return (
                    <SkillsScreenItem
                      key={currentSkill.id}
                      name={currentSkill.name}
                      image={currentSkill.image}
                    />
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </SkillsItems>
    </SkillsScreenContainer>
  );
}

export default SkillsScreen;
