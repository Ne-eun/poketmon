import { GetServerSideProps } from "next";
import Detail from "../src/containers/detail/Detail";

function DetailPage({ poketmon }) {
  return <Detail data={poketmon} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const poketmon = await fetch("http://localhost:3000/api/poketmon", {
    method: "post",
    body: JSON.stringify({
      id: context.query.id,
    }),
  }).then((data) => data.json());

  return {
    props: { poketmon },
  };
};
export default DetailPage;
