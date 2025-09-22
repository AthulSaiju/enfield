// app/components/CategoryCard.tsx
import Image from "next/image";
import React from "react";
import type { CardItem } from "../common/data";

type Props = {
  item: CardItem;
};

export default function CategoryCard({ item }: Props) {
  return (
    <div className="relative w-full max-w-[360px] h-[371px] rounded-[20px] overflow-visible ">
      <div className="absolute inset-0  rounded-[20px] card-blur z-10 p-4 px-4 flex flex-col justify-between ">
        <div className="px-4">
          <div className=" text-[#FF9900] card-text uppercase">
            {item.category}
          </div>
          <h3 className="mt-3 card-text uppercase">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center justify-between pr-4 mt-4 ">
          <div className="flex items-center gap-1  ">
<Image src="/assets/arrow.svg" alt="Icon 1" width={27} height={27} />            <span className="text-[#FF9900] card-text uppercase">Learn More</span>
          </div>
          <div className="card-text text-[10px] uppercase opacity-70">Exclusive</div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-start pl-2 pt-4 pointer-events-none z-0 ">
        <span
          className="bg-text"
         
        >
          {item.letter}
        </span>
      </div>

      <div className="absolute left-0 top-0 z-20 pointer-events-none w-[100%] h-[100%]  flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.title}
          width={165}
          height={192}
          className="w-[165px] h-[192px] object-contain"
          priority
        />
      </div>
    </div>
  );
}
