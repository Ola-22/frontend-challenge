import * as S from "./style";
import { Data } from "../../Data/Data";
import { useState } from "react";
import { Vector1, Vector2 } from "../../assets/img/img";

export default function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <S.FAQMain>
      <h1>FAQ</h1>
      {Data.map((item, index) => (
        <>
          <S.FAQContainer onClick={() => toggle(index)} key={index}>
            <S.FAQBox>
              <span>{item.question}</span>
              <span>
                {clicked === index ? (
                  <img src={Vector2} />
                ) : (
                  <img src={Vector1} />
                )}
              </span>
            </S.FAQBox>{" "}
            {clicked === index ? <p>{item.answer}</p> : null}
          </S.FAQContainer>
        </>
      ))}
    </S.FAQMain>
  );
}
