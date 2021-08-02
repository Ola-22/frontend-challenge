import styled from "styled-components";

export const FAQMain = styled.div`
  width: 891px;
  height: 528px;
  margin-left: 128px;
  top: 0;
  background-color: #fff;
  border-radius: 24px;

  @media (max-width: 400px) {
    flex-direction: column;
    display: flex;
    overflow-x: hidden;
    width: 312px;
    margin-left: 50px;
    margin-top: 30px;
  }
`;

export const FAQContent = styled.div`
  margin-top: 110px;
  display: flex;
  z-index: 2;

  @media (max-width: 400px) {
    flex-direction: column;
    display: flex;
    margin-top: 55px;
    z-index: 1000;
  }
`;

export const ImgFAQ = styled.img`
  position: absolute;
  bottom: 19%;
  z-index: 100;

  @media (max-width: 400px) {
    width: 80px;
    top: 1%;
    left: 10%;
    z-index: 9998;
    position: absolute;
  }
`;

export const WomanImg = styled.img`
  @media (max-width: 400px) {
    position: absolute;
    width: 200px;
    height: 150px;
    object-fit: contain;
    margin-left: 70px;
    top: -60px;
    filter: drop-shadow(0px 25px 2px #e5e5e5);
  }
`;

export const ImgVector = styled.img`
  display: none;
  @media (max-width: 400px) {
    display: block;
    position: absolute;
    width: 200px;
    height: 150px;
    object-fit: contain;
    margin-left: 70px;
    top: -60px;
    filter: drop-shadow(0px 25px 2px #e5e5e5);
  }
`;
