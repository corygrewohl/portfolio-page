import React, { FC, useState } from "react";
import SkillsScreenItemContainer from "./Styles/SkillsScreenItem.styled";

interface SkillsItemProps {
  // category: string;
  name: string;
  image: string;
}

const SkillsScreenItem: FC<SkillsItemProps> = ({ name, image }) => {

  return (
    <SkillsScreenItemContainer>
      <div className="skill">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    </SkillsScreenItemContainer>
  );
};

export default SkillsScreenItem;
