import { useState } from "react";
import { useItemQuery } from "../queries/useItemQuery";

const categories = [
  {
    id: 1,
    category_ids: [2, 3, 5, 6],
    name: "Berries",
  },
  {
    id: 2,
    category_ids: [34, 33, 39],
    name: "Balls",
  },
  
  {
    id: 3,
    category_ids: [36],
    name: "Scarves",
  },
  {
    id: 4,
    category_ids: [27],
    name: "Healing",
  },

];

export default function ProductList() {
  const [categoryId, setCategoryId] = useState(2);
  const { data, isError, isPending } = useItemQuery({
    category_ids: categories.find(({ id }) => id === categoryId)?.category_ids ?? [],
  });

  if (isError) {
    return "Kappuuutt";
  }
  if (isPending) {
    return "Loading...";
  }
  return (
    <div className="p-4">
      <div className="mb-4">
        {categories.map((category) => (
          <label key={category.id} className="">
            <input
              name="category"
              type="radio"
              value={category.id}
              checked={category.id === categoryId}
              onChange={(e) => {
                setCategoryId(Number(e.target.value));
              }}
              className="peer hidden"
            />
            <span className="peer-checked:bg-black peer-checked:text-white px-4 py-2 rounded cursor-pointer">
              {category.name}
            </span>
          </label>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <div className="flex group" key={item.id}>
            <div className="shrink-0">
              <img
                className="pixelated w-[60px] group-hover:animate-spin"
                src={item.default_sprite}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="uppercase font-bold">{item.name}</h3>
                <span>${item.cost}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
