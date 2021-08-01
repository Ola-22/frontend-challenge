import styled from "styled-components";
import SairaBold from "../../assets/fonts/static/Saira_Condensed/Saira_Condensed-Bold.ttf";
import SairaLight from "../../assets/fonts/static/Saira_Condensed/Saira_Condensed-Medium.ttf";

export const FAQMain = styled.div`
  margin-left: 10%;
  & > h1 {
    font-size: 36px;
    font-family: Saira;
    width: 241px;
    height: 57px;
    letter-spacing: 2px;
    & {
      @media (max-width: 400px) {
        text-align: center;
        margin-top: 30px;
      }
    }
  }
  @font-face {
    font-family: "Saira";
    src: url(${SairaBold});
  }
  & p {
    color: #55545c;
    font-size: 12px;
    width: 343px;
    font-weight: 400;
    margin-top: 10px;
  }
`;

export const FAQContainer = styled.div`
  display: flex;
  width: 343px;
  margin-bottom: 15px;
  cursor: pointer;
  flex-direction: column;
  @font-face {
    font-family: "SairaLight";
    src: url(${SairaLight});
  }
  & span:first-of-type {
    color: #55545c;
    font-size: 14px;
    font-family: SairaLight;
    width: 251px;
    font-weight: normal;
  }
  &:after {
    display: block;
    content: "";
    background: #e9e9e9;
    height: 1px;
    margin-top: 10px;
  }
  & {
    @media (max-width: 400px) {
      width: 250px;
    }
  }
`;

export const FAQBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 343px;
  @media (max-width: 500px) {
    width: 250px;
    & span:last-of-type {
      & img {
        position: absolute;
        margin-top: 8px;
      }
    }
  }
`;
