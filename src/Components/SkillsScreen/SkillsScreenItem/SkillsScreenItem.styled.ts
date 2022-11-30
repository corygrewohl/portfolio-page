import styled from "styled-components";

const SkillsScreenItemContainer = styled.div`
  /* text-align: center; */
  /* margin: 0; */

  p {
    opacity: 0;
    transition: opacity 0.5s;
    font-size: 21px;

    @media (min-width: 3000px) {
      font-size: 26px;
    }
  }

  img {
    display: flex;
    justify-content: center;
    width: auto;
    max-height: 100px;
    /* min-height: 75px;
      min-width: 75px; */
    transition: transform 0.5s;

    &:hover {
      transform: translateY(-10px);
    }

    &:hover {
      & ~ p {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1150px) {
  }
`;

export default SkillsScreenItemContainer;
