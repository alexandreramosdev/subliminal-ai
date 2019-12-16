import styled from "styled-components"

const Button = styled.button`
  width: ${({ small }) => (small ? "100px" : "200px")};
  height: ${({ small }) => (small ? "30px" : "58px")};
  background: #2a84eb;
  color: #fff;
  border: none;

  box-shadow: ${({ small }) =>
    small
      ? "-6px 6px 0px -1px #fff, -6px 6px 0 1px #2a84eb"
      : "-12px 12px 0px -1px #fff, -12px 12px 0 1px #2a84eb"};

  font-size: ${({ small }) => (small ? "8px" : "18px")};
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  transition: all ease 300ms;

  &:hover {
    box-shadow: 0 0 0 -1px #fff, 0 0 0 #2a84eb;
  }
`

export const ButtonSmall = styled(Button)`
  width: 100px;
  height: 30px;
  font-size: 8px;
  box-shadow: -6px 6px 0px -1px #fff, -6px 6px 0 1px #2a84eb;
`

export default Button
