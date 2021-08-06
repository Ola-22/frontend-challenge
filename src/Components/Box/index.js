import { useRef, useState, useEffect } from "react";
import * as S from "./style";
import { Vector } from "../../assets/img/img";
import { maxlengthContentEditable } from "maxlength-contenteditable";

export default function Box() {
  const [characterCount, setCharacterCount] = useState(0);
  const [text, setText] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const count = useRef();

  useEffect(() => maxlengthContentEditable(), []);

  const colors = ["#fe636f", "#ffde6a", "#70cf98", "#2984ff", "#725cfd"];

  useEffect(() => {
    document.execCommand("foreColor", false, currentColor);
  }, [currentColor]);

  return (
    <S.BoxMain>
      <S.BoxContainer>
        <h6>{characterCount}/1500</h6>
        <div
          onInput={(event) => {
            setText(event.currentTarget.innerText);
            setCharacterCount(event.currentTarget.innerText.length);
            if (event.currentTarget.innerText.length > 150) {
              return <p>stop</p>;
            }
          }}
          ref={count}
          data-max-length="1500"
          contentEditable
          suppressContentEditableWarning={true}
        >
          {!text && <p style={{ color: "#ccc" }}>Write your message here...</p>}
        </div>
        <S.BoxColor>
          <h5>Color</h5>
          {colors.map((color, index) => (
            <button
              style={{ backgroundColor: [color] }}
              onClick={() => setCurrentColor(color)}
            ></button>
          ))}
        </S.BoxColor>
      </S.BoxContainer>
      <button>
        <img src={Vector} alt="" />
        Send
      </button>
    </S.BoxMain>
  );
}
