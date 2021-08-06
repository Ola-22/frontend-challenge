import styled from "styled-components";

export const ShapeMain = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  background: #222730;
  height: 100vh;
`;

export const ShapeContainer = styled.div`
  background: #4caab3;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 6%;
  position: relative;
`;

export const Circle = styled.div`
  position: absolute;
  z-index: 22;
  margin: auto;
  border-radius: 50%;
  transform: rotate(45deg);
  width: 128px;
  height: 128px;
  background: #222730;
`;
