import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { Item } from "../types";

const itemQuery = `query ($limit: Int = 20, $category_ids: [Int]!) {
    pokemon_v2_item(
      limit: $limit, 
      where: {item_category_id: { _in: $category_ids }},
    ) {
      id
      name
      cost
      pokemon_v2_itemsprites {
        sprites
      }
      pokemon_v2_itemflavortexts(limit: 1, where: { language_id: { _eq: 9 } }) {
        flavor_text
      }
    }
  }`;

export const useItemQuery = ({limit, category_ids = []}: {limit?: number, category_ids: number[]}) => {
  const result = useQuery({
    queryFn: async () => {
      const response: any = await request(
        "https://beta.pokeapi.co/graphql/v1beta",
        itemQuery, {limit, category_ids}
      );
      const processedData: Item[] = response.pokemon_v2_item.map(
        (item: any) => ({
          id: item.id,
          name: item.name,
          cost: item.cost,
          default_sprite: item.pokemon_v2_itemsprites[0].sprites.default,
          description: item.pokemon_v2_itemflavortexts[0].flavor_text,
        })
      );
      return processedData;
    },
    queryKey: ["items", {limit, category_ids}],
  });
  return result;
};
