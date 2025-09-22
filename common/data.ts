// app/data.ts
export type CardItem = {
  id: string;
  category: string;   // small label
  title: string;      // heading
  image: string;      // path under /public
  letter: string;     // big background letter
};

export const cards: CardItem[] = [
  {
    id: "helmet",
    category: "Helmet",
    title: "Scorpion EXO R320 Helmet",
    image: "/assets/helmet.png", // put your helmet image here
    letter: "G",
  },
  {
    id: "gloves",
    category: "Gloves",
    title: "Bogotto F-ST Gloves",
    image: "/assets/gloves.png", // put your gloves image here
    letter: "U",
  },
  {
    id: "jacket",
    category: "Jacket",
    title: "Icon Motorcycle Jacket",
    image: "/assets/jacket.png", // put your jacket image here
    letter: "N",
  },
];
