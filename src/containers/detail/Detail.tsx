import { useRouter } from "next/router";
import style from "./Detail.module.scss";

type DataType = {
  name: string;
  type: Array<string>;
  height: string;
  weight: string;
  img: string;
};

type Props = {
  data: DataType;
};
function Detail({ data }: Props) {
  const router = useRouter();
  return (
    <div className={style.detail}>
      <button onClick={() => router.push("/")}>&#171;뒤로가기</button>
      <h1>포켓몬스터 상세 정보</h1>
      <div className={style.box}>
        <img src={data.img} alt={`${data.name}`} />
        <div>
          <h2>이름: {data.name}</h2>
          <p>타입: {data.type.map((item) => item).join("")}</p>
          <p>신장: {data.height}</p>
          <p>몸무게: {data.weight}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
