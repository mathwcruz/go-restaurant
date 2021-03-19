import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  justify-content: center;
  align-items: center;
  @media (max-width: 690px) {
    grid-template-columns: 1fr;
    grid-gap: 42px;
  } 

  @media (min-width: 690px) and  (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  } 
`;
