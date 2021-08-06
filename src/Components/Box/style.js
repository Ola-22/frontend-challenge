import styled from "styled-components";
import Roboto from "../../assets/fonts/Roboto-Light.ttf";

export const BoxMain = styled.div`
  @font-face {
    font-family: "Roboto";
    src: url(${Roboto});
  }
  font-family: Roboto;

  display: flex;
  justify-content: center;
  align-content: center;
  width: 419px;
  height: 291px;
  background: #ffffff;
  box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.13);
  border-radius: 39px;
  flex-flow: row wrap;
  & > button {
    width: 92px;
    height: 36px;
    margin: 10px 0 0 285px;
    background: #2984ff;
    border-radius: 12px;
    border: none;
    color: white;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: Roboto;
    & > img {
      margin-right: -10px;
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 375px;
  height: 199px;
  background: #ffffff;
  border: 2px solid #f9fafa;
  border-radius: 12px;
  & > h6 {
    font-size: 10px;
    color: #ced5de;
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 0;
  }
  & > div {
    display: flex;
    height: 21px;
    margin-left: 18px;
    font-weight: bold;
    font-size: 18px;
    color: #000000;
    border: none;
    outline: none;
    word-break: break-all;
  }
`;

export const BoxColor = styled.div`
  display: flex;
  margin-top: 30%;
  justify-content: space-between;
  width: 50%;

  & > h5 {
    color: #ced5de;
    margin-right: 8px;
  }

  & > button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
  }
`;
