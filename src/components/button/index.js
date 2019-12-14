import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 58px;
  background: #2a84eb;
  color: #fff;
  border: none;
  
  box-shadow:  -12px 12px 0px -1px #fff, -12px 12px 0 1px #2a84eb;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  transition: all ease 300ms;

  &:hover{
    box-shadow: 0 0 0 -1px #fff, 0 0 0 #2a84eb;
  }
`;


export default Button