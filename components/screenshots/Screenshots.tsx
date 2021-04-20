import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Screenshot = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: calc(4 / 3 * 50%);
  opacity: 0.7;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
  ${(props) =>
    props.imageUrl &&
    `
        background-image: url(${props.imageUrl});
        background-size: cover;
        background-position: center;
    `}
`;
