import React, { useEffect, useState } from "react";
import {
  SkillsItems,
  SkillsScreenContainer,
  SkillsCategoryTitle,
  SkillsCategory,
} from "./Styles/SkillsScreen.styled";
import { frontend, backend, other } from "../skills_data";
import SkillsScreenItem from "./SkillsScreenItem";
import Jump from "react-reveal/Jump";

function SkillsScreen() {
  return (
    <SkillsScreenContainer>
      <h2 className="title skills">Skills</h2>
      <SkillsItems>
        <SkillsCategoryTitle>Frontend Skills</SkillsCategoryTitle>
        <SkillsCategory>
          <br />
          {frontend.map((currentSkill) => {
            return (
              <Jump>
                <SkillsScreenItem
                  key={currentSkill.id}
                  name={currentSkill.name}
                  image={currentSkill.image}
                />
              </Jump>
            );
          })}
        </SkillsCategory>
        <SkillsCategoryTitle>Backend Skills</SkillsCategoryTitle>
        <SkillsCategory>
          <br />
          {backend.map((currentSkill) => {
            return (
              <Jump>
                <SkillsScreenItem
                  key={currentSkill.id}
                  name={currentSkill.name}
                  image={currentSkill.image}
                />
              </Jump>
            );
          })}
        </SkillsCategory>
        <SkillsCategoryTitle>Other Skills</SkillsCategoryTitle>
        <SkillsCategory>
          <br />
          {other.map((currentSkill) => {
            return (
              <Jump>
                <SkillsScreenItem
                  key={currentSkill.id}
                  name={currentSkill.name}
                  image={currentSkill.image}
                />
              </Jump>
            );
          })}
        </SkillsCategory>
      </SkillsItems>
    </SkillsScreenContainer>
  );
}

export default SkillsScreen;
