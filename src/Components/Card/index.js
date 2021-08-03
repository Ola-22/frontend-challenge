import {
  avatarImage,
  BannerImage,
  Vector4,
  Vector5,
  heartIcons,
  accountIcon,
} from "../../assets/img/img";
import * as S from "./style";

export default function Card() {
  return (
    <S.CardContainer>
      <img src={BannerImage} alt="" height="248px" width="339px" />
      <S.CardBox>
        <div>
          <img src={avatarImage} alt="" />
          <h4>Alaa Hijazi</h4>
        </div>

        <button>follow</button>
      </S.CardBox>
      <h1>Experience The Sport Light With Alaa Hijazi</h1>
      <h5>Whatever you say, Hello</h5>
      <S.CardBody>
        <img src={heartIcons} alt="" />
        <img src={accountIcon} alt="" />
      </S.CardBody>
      <button>Message</button>
    </S.CardContainer>
  );
}
