import Rectangle from "./Rectangle";
import * as S from "./style";

export default function Shape() {
  return (
    <S.ShapeMain>
      <S.ShapeContainer>
        <Rectangle />
        <S.Circle />
      </S.ShapeContainer>
    </S.ShapeMain>
  );
}
