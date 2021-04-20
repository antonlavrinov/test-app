import styled from "styled-components";
import LookingGlassIcon from "../../assets/glass.svg";

export const LookingGlass = styled((props) => <LookingGlassIcon {...props} />)`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  :hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 15px 20px 15px 45px;
  width: 100%;
  background: var(--pale-blue);
  outline: none;
  border: none;
  color: var(--white);
  border-radius: 50px;
  ::placeholder {
    color: var(--pale-text);
    font-size: 15px;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  position: absolute;
  top: 55px;
  left: 0;
  z-index: 2;
  width: 100%;
  background: var(--dark);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 10px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background: var(--background-dark-blue);
  }
`;
