import styled from "styled-components";

const NavbarContainer = styled.div`
    height: 121px;
    background-color: #181c21;
    padding: 0px 220px;

    display: flex;
    align-items: center;
    justify-content: space-between;

  .header-container {

    display: flex;
    gap: 106px;
  }

  h1 {
    font-size: 26;
    font-weight: 500;
    color: #fb8122;

    display: flex;
    align-items: center;
    height: 100%;
  }

  .navigation {
    display: flex;
    gap: 55px;
    align-items: center;

    a {
      text-decoration: none;
      color: #e1e2e2;
      font-size: 24;
      font-weight: 300;
    }
  }

  .social-media {
    display: flex;
    gap: 24px;

    a {
      animation: spin 2s;
    }

    a:nth-child(2){
      animation-delay: 0.2s;
    }

    a:nth-child(3){
      animation-delay: 0.4s;
    }

    @keyframes spin {
      0% {
        transform: rotate(360deg)
      }
    }
  }
`;

export default NavbarContainer;
