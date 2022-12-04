import styled from "styled-components";

const SkillsScreenItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    opacity: 0;
    transition: opacity 0.5s;
    font-size: 21px;
    text-align: center;

    @media (min-width: 3000px) {
      font-size: 26px;
    }
  }

  img {
    width: auto;
    max-height: 100px;
    align-self: center;
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
`;

export default SkillsScreenItemContainer;
