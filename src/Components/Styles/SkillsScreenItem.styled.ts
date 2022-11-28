import styled from "styled-components";

const SkillsScreenItemContainer = styled.div`
  .skill {
    text-align: center;

    p {
      opacity: 0;
      transition: opacity 0.5s;
    }

    img {
      width: auto;
      max-height: 75px;
      min-height: 75px;
      min-width: 75px;
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
  }

  @media (max-width: 1150px) {
  }
`;

export default SkillsScreenItemContainer;
