import styled from "styled-components";
import Roboto from "../../assets/fonts/Roboto-Light.ttf";

export const CardContainer = styled.div`
  @font-face {
    font-family: "Roboto";
    src: url(${Roboto});
  }
  position: relative;
  width: 379px;
  height: 538px;
  background: #181a1c;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  margin: auto;
  flex-wrap: wrap;
  margin-top: 2%;
  margin-bottom: 3.2%;
  padding-left: 20px;
  font-family: Roboto;
  & > img:first-of-type {
    margin-top: 24px;
    margin-bottom: 18px;
  }
  & > h1 {
    width: 260px;
    font-size: 17px;
    letter-spacing: 0.015em;
    color: #ffffff;
    margin-bottom: 8px;
  }
  & > h5 {
    font-size: 11px;
    letter-spacing: 0.015em;
    color: #79797b;
  }

  & > button {
    width: 339px;
    height: 53px;
    background: linear-gradient(91.4deg, #ff293c 0%, #fb3175 100%);
    border-radius: 12px;
    border: none;
    margin-top: 15px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.05em;
    cursor: pointer;
  }
`;

export const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  & > div:first-of-type {
    display: flex;
    align-items: center;
    margin-right: 50px;
    & > h4 {
      font-weight: bold;
      color: white;
      font-size: 15px;
      margin-left: 15px;
      letter-spacing: 0.01em;
    }
  }

  & > button {
    background: linear-gradient(96.95deg, #ff293c 0%, #fb3175 100%);
    border-radius: 26px;
    width: 63px;
    height: 22px;
    color: white;
    border: none;
    font-size: 10px;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-family: Roboto;
    margin-right: 18px;
    cursor: pointer;
  }
`;

export const CardBody = styled.div`
  display: flex;
  & > img {
    margin-top: 12px;
    border: 1px solid #3a3c3d;
    object-fit: contain;
    background: #3a3c3d;
    border-radius: 48px;
    padding: 8px;
    color: white;
    cursor: pointer;
    &:last-child {
      margin-left: 12px;
    }
  }
`;
