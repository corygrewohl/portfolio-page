import styled from "styled-components";
import Lego from '../../assets/legobricks.jpg';

export const SkillsScreenContainer = styled.div`
  /* height: 90vh;   */
  min-height: 750px;
  color: #E1E2E2;
  background-color: #1d2228;
  /* background-image: url(${Lego}); */
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
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .frontend,
  .backend,
  .other {
  }

  .accordion-skills {
    display: none;
  }

  @media (max-width: 1150px) {
    .accordion-skills {
      display: block;
      padding: none;
    }
    .full-skills {
      display: none;
    }

    padding: none;
  }


`;

export const SkillsCategoryTitle = styled.h2`
  font-size: 24px;
`;

export const SkillsCategory = styled.div`
  display: flex; 
  gap: 40px;
`;
