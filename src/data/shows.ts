export interface TvDramas {
  title: string;
  description: string;
  price: number;
  imagePath: string;
  id: string;
}

export const initialShows: TvDramas[] = [
  {
    id: "1",
    title: "爱情毒药",
    description: "GinJ",
    price: 520,
    imagePath: "./爱情毒药.jpg",
  },
  {
    id: "2",
    title: "Only You",
    description: "lingorm",
    price: 520,
    imagePath: "./onlyyou2.jpg",
  },
  {
    id: "3",
    title: "固执的爱",
    description: "faymay",
    price: 520,
    imagePath: "./固执的爱.jpg",
  },
  {
    id: "4",
    title: "铁狱情迷",
    description: "blejie",
    price: 520,
    imagePath: "./tymq.jpg",
  },
  {
    id: "5",
    title: "鲸鱼杂货铺",
    description: "milklove",
    price: 520,
    imagePath: "./jy.jpg",
  },
  {
    id: "6",
    title: "地球倾斜23.5度",
    description: "milklove",
    price: 520,
    imagePath: "./23.5.jpg",
  },
];
