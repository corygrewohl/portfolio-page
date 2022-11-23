import styled from "styled-components";

const SkillsScreenItemContainer = styled.div`
  .skill {
    text-align: center;

    p {
      opacity: 0;
    }

    @keyframes fadeInText {
      100% {
        opacity: 1;
      }
    }

    @keyframes imgMoveIn {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-10px);
      }
    }
    @keyframes imgMoveOut {
      from {
        transform: translateY(-10px);
      }
      to {
        transform: translateY(0px);
      }
    }

    img {
      width: auto;
      max-height: 75px;
      animation: imgMoveOut 0.5s;

      &:hover {
        animation: imgMoveIn 0.5s forwards;
      }

      &:hover {
        & ~ p {
          animation: fadeInText 0.5s forwards;
        }
      }
    }
  }
`;

export default SkillsScreenItemContainer;
