import { useState } from "react";
import {
  avatarImage,
  BannerImage,
  heartIcons,
  accountIcon,
  favoriteIcon,
} from "../../assets/img/img";
import * as S from "./style";

export default function Card() {
  const [liked, setLiked] = useState(false);
  const [follow, setFollow] = useState(false);

  return (
    <S.CardContainer>
      <img src={BannerImage} alt="" height="248px" width="339px" />
      <S.CardBox>
        <div>
          <img src={avatarImage} alt="" />
          <h4>Alaa Hijazi</h4>
        </div>
        {follow ? (
          <button onClick={(e) => setFollow(false)}>unfollow</button>
        ) : (
          <button onClick={(e) => setFollow(true)}>follow</button>
        )}
        {/* <button>follow</button> */}
      </S.CardBox>
      <h1>Experience The Sport Light With Alaa Hijazi</h1>
      <h5>Whatever you say, Hello</h5>
      <S.CardBody>
        {liked ? (
          <img src={heartIcons} alt="" onClick={(e) => setLiked(false)} />
        ) : (
          <img
            width="37"
            height="37"
            src={favoriteIcon}
            alt=""
            onClick={(e) => setLiked(true)}
          />
        )}

        {/* <img src={heartIcons} alt="" /> */}
        <img src={accountIcon} alt="" />
      </S.CardBody>
      <button>Message</button>
    </S.CardContainer>
  );
}
