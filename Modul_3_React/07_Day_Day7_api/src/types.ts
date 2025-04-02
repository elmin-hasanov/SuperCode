export type Bird = {
  id: string;
  name: string;
  latinName: string;
  description: string;
  food: string[];
  size: "XS" | "S" | "M" | "L" | "XL";
  imageUrl: string;
  songUrl: string;
};
