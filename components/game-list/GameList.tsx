import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  width: 100%;
  @media only screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GameCard = styled.a`
  display: block;
  width: 100%;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  :hover {
    cursor: pointer;
    transform: translateY(-3%);
  }
  ${(props) =>
    props.imageUrl &&
    `
        background-image: url(${props.imageUrl});
        background-size: cover;
        background-position: center;
    `}
`;

export const GameShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    360deg,
    rgba(14, 25, 44, 1) 0%,
    rgba(14, 25, 44, 0.5) 40%,
    rgba(14, 25, 44, 0) 100%
  );
  height: 100%;
  width: 100%;
`;

export const GameInfo = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 10px;
  color: white;
`;

export const GameTitle = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 5px;
`;

export const GameDate = styled.div`
  color: var(--pale-text);
`;

export const GameRating = styled.div`
  position: absolute;
  font-size: 14px;
  color: var(--blue);
  background: var(--background-dark-blue);
  right: 12px;
  bottom: 12px;
  width: 40px;
  padding: 3px 0;
  border: 1px solid var(--blue);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
