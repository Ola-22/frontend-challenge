import LeafBox from "../../Components/Leaf";
import * as S from "./style";

export default function Leaf() {
  return (
    <S.LeafMain>
      <LeafBox />
      <div className="containerLeaft" style={{ left: "14%" }}>
        <LeafBox />
      </div>
      <div className="containerLeaft" style={{ left: "28%" }}>
        <LeafBox />
      </div>
      <div className="containerLeaft" style={{ left: "42%" }}>
        <LeafBox />
      </div>
      <div className="containerLeaft" style={{ left: "56%" }}>
        <LeafBox />
      </div>
      <div className="containerLeaft" style={{ left: "70%" }}>
        <LeafBox />
      </div>
      <div className="containerLeaft" style={{ left: "84%" }}>
        <LeafBox />
      </div>
    </S.LeafMain>
  );
}
