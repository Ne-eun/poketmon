import { useRouter } from "next/router";
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
  const route = useRouter();
  return (
    <div className={style.home}>
      <h1>POKETMON ILLUSTRATED BOOK</h1>
      <input type="text" />
      <div>
        <TypeButton on={true} color="black">
          전체
        </TypeButton>
        {types &&
          types.map((type, index) => (
            <TypeButton key={index} color={type.color}>
              {type.name}
            </TypeButton>
          ))}
      </div>
      <div className={style.cards}>
        {poketmons.map((item, index) => (
          <Card
            name={item.name}
            key={item.id}
            onClick={() => route.push(`/${index}`)}
            srcUrl={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
