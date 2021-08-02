import styled from "styled-components";

export const LeafContainer = styled.div`
  width: 180px;
  height: 380px;
  position: absolute;
  left: 30px;
  display: flex;
  justify-content: space-between;
  top: 23%;
`;

export const LeafBox = styled.span`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  left: ${(props) => (props.leftP ? "" : "52%")};
  bottom: 73.68%;
  background: ${(props) => (props.primary ? "#1a4341" : "#F3AC3C")};
  border-radius: ${(props) => (props.primaryRadius ? "0px 50px" : "50px 0")};
  width: 80px;
  height: ${(props) => (props.primary ? "100px" : "60px")};
`;
