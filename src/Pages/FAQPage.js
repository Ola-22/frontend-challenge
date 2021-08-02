import React from "react";
import { GroupImg, WomanImg, Vector3 } from "../assets/img/img";
import Accordion from "../Components/Accordion";
import AppLayout from "../Layouts/AppLayout";
import FAQLayout from "../Layouts/FAQLayout";
import * as S from "./style";

export default function FAQPage() {
  return (
    <AppLayout>
      <FAQLayout>
        <S.ImgFAQ src={GroupImg} alt="img" />
        <S.FAQMain>
          <S.FAQContent>
            <S.WomanImg src={WomanImg} alt="img" />
            <img src={Vector3} alt="" className="img_vector" />
            <Accordion />
          </S.FAQContent>
        </S.FAQMain>
      </FAQLayout>
    </AppLayout>
  );
}
