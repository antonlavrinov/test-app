import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  background: var(--pale-blue);
  font-size: 20px;
  color: var(--white);
  padding: 15px 35px;
  min-width: 200px;
  border-radius: 10px;
  margin: 30px auto;
  :hover {
    cursor: pointer;
  }
`;
