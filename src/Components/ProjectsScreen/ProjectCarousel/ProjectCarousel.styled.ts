import styled from "styled-components";

export const Carousel = styled.div`
padding-bottom: 5em;
    border-bottom: 1px solid white;

  #main {
    padding: 20px;
  }

  .project-slide {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    padding: 10px;

    img {
      /* max-width: 80%; */
      padding-bottom: 20px;
    }

    h3 {
      font-size: 26px;
    }

    p {
        text-align: center;
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;

      .skill-icon {
        max-height: 100px;
      }
    }

    @media (min-width: 3000px) {
      h3 {
        font-size: 36px;
      }
      p {
        font-size: 26px;
      }
    }
  }
`;
