import styled from "styled-components";

const ArrowsContainer = styled.div`
  span {
    display: block;
    width: 80px;
    height: 80px;
    border-bottom: 5px solid #e1e2e2;
    border-right: 5px solid #e1e2e2;
    transform: rotate(45deg);
    margin: 0px 70px -50px 70px;
    animation: scroll 2s infinite;

    &:hover {
      cursor: pointer;
    }
  }

  span:nth-child(2) {
    animation-delay: -0.2s;
  }

  span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`;

export default ArrowsContainer;
