import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 124px 220px 0px 220px;

  display: flex;
  justify-content: space-between;

  .hero-statement-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .hero-statement {
      color: #e1e2e2;
      font-size: 64px;
      font-weight: 700;
    }

    .meet-me {
      color: #3c91e6;
    }
  }
`;

export default HeroContainer;
