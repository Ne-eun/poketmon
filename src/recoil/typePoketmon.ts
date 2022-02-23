import { atom, selector } from "recoil"

export const typeState = atom({
  key: "typeState",
  default: 'all',
});

type PoketmonsType = Array<{
  id: number;
  name: string;
  img: string;
}>;

export const poketmons = selector({
  key: "poketmonsByType",
  get: async ({ get }) => {
    const type = get(typeState);
    const poketmons = await fetch(
      "http://localhost:3000/api/poketmons_type",
      {
        method: "post",
        body: JSON.stringify({
          key: type,
        }),
      }
    ).then((data) => data.json());
    return poketmons
  }
})