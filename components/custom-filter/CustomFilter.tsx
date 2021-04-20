import styled from "styled-components";
import ArrowIcon from "../../assets/arrow.svg";

export const Arrow = styled((props) => <ArrowIcon {...props} />)``;

export const Select = styled.div`
  background: var(--pale-blue);
  padding: 10px;
  color: var(--pale-text);
  border-radius: 10px;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  svg {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    margin-left: 10px;
  }
  :hover {
    cursor: pointer;
  }
  ${(props) =>
    props.isLoading &&
    `
        :hover {
            cursor: default;
        }
    `}
`;

export const SelectTitle = styled.div`
  span {
    color: var(--white);
  }
  ${(props) =>
    props.isLoading &&
    `
        span {
            color: var(--pale-text);
        }
    `}
`;

export const OptionList = styled.div`
  width: 100%;
  background: var(--dark);
  padding: 15px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
export const Option = styled.div`
  padding: 5px;
  border-radius: 5px;
  :hover {
    background: var(--background-dark-blue);
    cursor: pointer;
  }
  ${(props) =>
    props.selectStyle &&
    `
        background: var(--background-dark-blue);
    `}
`;

export const SelectWrapper = styled.div`
  position: relative;
  min-width: 250px;
  margin-right: 10px;
  margin-bottom: 10px;
  :last-child {
    margin-right: 0;
  }
`;
