import styled, { keyframes } from 'styled-components';

const topToCenterAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0.3;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;

  header {
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 30px 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: ${topToCenterAnimation} ease-in-out 0.6s;
    @media (max-width: 690px) {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-gap: 40px;
      justify-content: center;
    }

    img {
      @media (max-width: 690px) {
        margin-top: 1.5rem;
      }
    }

    nav {
      @media (max-width: 690px) {
        justify-self: center;
      }
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;
          transition: filter 0.2s;
          animation: ${topToCenterAnimation} ease-in-out 0.6s;

          &:hover {
            filter: brightness(0.95);
            transform: scale(0.99);
          }

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
