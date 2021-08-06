import styled from "styled-components";

export const RectangleMain = styled.div`
  position: absolute;
  margin: auto;
  transform: rotate(45deg);
  width: ${(props) => (props.primary ? "807.92px" : "420px")};
  height: ${(props) => (props.primary ? "807.4px" : "420px")};
  background: ${(props) => (props.primary ? "#222730" : "#4CAAB3")};
`;

export default function Rectangle() {
  return (
    <>
      <RectangleMain primary></RectangleMain>
      <RectangleMain></RectangleMain>
    </>
  );
}
