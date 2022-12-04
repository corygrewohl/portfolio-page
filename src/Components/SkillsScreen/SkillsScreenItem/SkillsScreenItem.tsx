import React, { FC, useState } from "react";
import SkillsScreenItemContainer from "./SkillsScreenItem.styled";

interface SkillsItemProps {
  // category: string;
  name: string;
  image: string;
}

const SkillsScreenItem: FC<SkillsItemProps> = ({ name, image }) => {

  return (
    <SkillsScreenItemContainer>
        <img src={image} alt="" />
        <p>{name}</p>
    </SkillsScreenItemContainer>
  );
};

export default SkillsScreenItem;
