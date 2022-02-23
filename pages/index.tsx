import Home from "../src/containers/home/Home";

function HomePage({ types, poketmons }) {
  return <Home types={types} poketmons={poketmons} />;
}

export async function getServerSideProps() {
  const types = await fetch(
    "https://2hae-test.s3.ap-northeast-2.amazonaws.com/pokemon-type.json"
  ).then((res) => res.json());

  const poketmons = await fetch(
    "https://2hae-test.s3.ap-northeast-2.amazonaws.com/pokemon.json"
  ).then((res) => res.json());
  return {
    props: { types, poketmons },
  };
}
export default HomePage;
