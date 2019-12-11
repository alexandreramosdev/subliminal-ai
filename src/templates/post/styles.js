import styled from 'styled-components';

export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url( ${({ bgHero }) => bgHero ? bgHero : ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;  
  height: 847px;
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 1040px;
  text-align: center;

  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: #ffffff;

  font-size: 60px;
  font-weight: 700;
  line-height: 90px;
`;

export const Category = styled.div`
  width: 119px;
  height: 36px;
  border-radius: 18px;
  background-color: #ffffff;

  color: #2a84eb;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
`;
