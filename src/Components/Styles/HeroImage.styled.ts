import styled from "styled-components";

const HeroImageContainer = styled.div`
  
    img {
      height: 651px;
      width: 434px;

      border: 4px solid #e1e2e2;
      border-radius: 10px;
    }

    .border-gradient {
      border-image: linear-gradient(var(--angle), #3c91e6, #fb8122) 1;
      animation: 4s rotate linear infinite;
    }

    @keyframes rotate {
      to {
        --angle: 360deg;
      }
    }

    @property --angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }
  
`;

export default HeroImageContainer;
