import styled from "styled-components";
import Lego from "../../assets/legobricks.jpg";

export const SkillsScreenContainer = styled.div`
  color: #e1e2e2;
  background-color: #181c21;
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: left 10%;
  background-attachment: fixed;
  padding: 4em 12em 0em 12em;

  @media (max-width: 1150px) {
    padding: 1em;
    min-height: 400px;
  }
`;

export const SkillsItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  padding-top: 20px;
  padding-bottom: 6em;
  border-bottom: 1px solid white;

  .accordion-skills {
    display: none;
  }

  @media (max-width: 1150px) {
    .accordion-skills {
      display: block;
    }
    .full-skills {
      display: none;
    }
  }
`;

export const SkillsCategoryTitle = styled.h2`
  font-size: 26px;

  @media (min-width: 3000px) {
      font-size: 36px;
    }
`;

export const SkillsCategory = styled.div`
  margin: 10px 0px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
`;
