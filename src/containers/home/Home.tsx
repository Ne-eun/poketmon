import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { typeState } from "../../recoil/typePoketmon";
import Card from "./components/Card";
import TypeButton from "./components/TypeButton";
import style from "./Home.module.scss";

type TypesType = Array<{
  name: string;
  color: "string";
}>;

type PoketmonsType = Array<{
  id: number;
  name: string;
  img: string;
}>;

type Props = {
  types: TypesType;
  poketmons: PoketmonsType;
};

function Home({ types, poketmons }: Props) {
  const [data, setData] = useState(poketmons);
  const [typeSeleted, setTypeSeleted] = useRecoilState(typeState);

  useEffect(() => {
    if (typeSeleted === "all") return setData(poketmons);
    async function changeData() {
      const poketmons = await fetch(
        "http://localhost:3000/api/poketmons_type",
        {
          method: "post",
          body: JSON.stringify({
            key: typeSeleted,
          }),
        }
      ).then((data) => data.json());
      setData(poketmons);
    }
    changeData();
  }, [typeSeleted]);

  const route = useRouter();
  return (
    <div className={style.home}>
      <h1>POKETMON ILLUSTRATED BOOK</h1>
      <input type="text" />
      <div className={style.type_wrap}>
        <TypeButton
          onClick={() => setTypeSeleted("all")}
          on={typeSeleted === "all"}
          color="black"
        >
          전체
        </TypeButton>
        {types &&
          types.map((type, index) => (
            <TypeButton
              onClick={() => setTypeSeleted(type.name)}
              on={typeSeleted === type.name}
              key={index}
              color={type.color}
            >
              {type.name}
            </TypeButton>
          ))}
      </div>
      <div className={style.cards}>
        {data.map((item, index) => (
          <Card
            name={item.name}
            key={item.id}
            onClick={() => route.push(`/${item.id}`)}
            srcUrl={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
