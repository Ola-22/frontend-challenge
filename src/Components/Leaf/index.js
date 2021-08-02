import * as S from "./style";

export default function LeafBox() {
  return (
    <S.LeafContainer>
      <S.LeafBox primary primaryRadius leftP style={{ top: "30%" }}></S.LeafBox>
      <S.LeafBox style={{ top: "30%" }}></S.LeafBox>
      <S.LeafBox primaryRadius style={{ left: "0", top: "60%" }}></S.LeafBox>
      <S.LeafBox
        primary
        style={{ left: "52%", top: "50%", borderRadius: "50px 0" }}
      ></S.LeafBox>
      <S.LeafBox primaryRadius primary leftP style={{ top: "80%" }}></S.LeafBox>
      <S.LeafBox style={{ left: "50%", top: "80%" }}></S.LeafBox>
      <S.LeafBox primaryRadius style={{ left: "0", top: "110%" }}></S.LeafBox>
      <S.LeafBox
        primary
        style={{ top: "100%", left: "50%", borderRadius: "50px 0" }}
      ></S.LeafBox>
    </S.LeafContainer>
  );
}
