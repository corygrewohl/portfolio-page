import styled from "styled-components";

const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;

  height: 80px;
  background-color: #181c21;
  border-bottom: solid 4px #181c21;
  padding: 0px 12em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #E1E2E2;

  .header-container {
    display: flex;
    gap: 100px;
    /* align-items: flex-end; */
  }

  h1 {
    font-family: "Bebas Neue";
    font-size: 40px;
    font-weight: 500;
    span {
      color: #fb8122;
      font-family: inherit;
    }
    transform: translateY(5px);
    height: 100%;
  }

  .navigation {
    display: flex;
    gap: 50px;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }

  .social-media {
    display: flex;
    gap: 24px;

    a {
      animation: spin 2s;
    }

    a:nth-child(2) {
      animation-delay: 0.2s;
    }

    a:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes spin {
      0% {
        transform: rotate(360deg);
      }
    }
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 1200px) {
    .social-media {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }

  @media (max-width: 1050px) {
    .navigation {
      display: none;
    }
    padding-inline: 4em;
  }
`;

export default NavbarContainer;
