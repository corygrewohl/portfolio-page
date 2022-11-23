import styled from "styled-components";
import Lego from '../../assets/legobricks.jpg';

export const SkillsScreenContainer = styled.div`
  height: 90vh;
  min-height: 700px;
  background-color: #1d2228;
  /* background-image: url(${Lego}); */
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: left 10%;
  background-attachment: fixed;
  padding: 4em 12em 0em 12em;
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
`;

export const SkillsCategoryTitle = styled.h2`
  font-size: 24px;
`;

export const SkillsCategory = styled.div`
  display: flex;
  gap: 40px;
`;
