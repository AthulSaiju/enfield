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
      {/* Card surface */}
      <div className="absolute inset-0  rounded-[20px] card-blur z-10 p-4 px-8 flex flex-col justify-between ">
        {/* Top: category label + title */}
        <div>
          <div className=" text-[#FF9900] card-text uppercase">
            {item.category}
          </div>
          <h3 className="mt-3 card-text uppercase">
            {item.title}
          </h3>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between text-[12px]">
          <div className="flex items-center gap-3  ">
            {/* arrow symbol and text */}
            <span className="text-sm transform translate-x-[-2px]">→</span>
            <span className="text-[#FF9900] card-text uppercase">Learn More</span>
          </div>
          <div className="card-text text-[10px] uppercase">Exclusive</div>
        </div>
      </div>

      {/* Big faded background letter */}
      <div className="absolute inset-0 flex items-center justify-start pl-2 pt-4 pointer-events-none z-0 ">
        <span
          className="bg-text"
         
        >
          {item.letter}
        </span>
      </div>

      {/* Product image - placed above letter but below card surface so it looks embedded */}
      <div className="absolute left-0 top-0 z-20 pointer-events-none w-[100%] h-[100%]  flex items-center justify-center">
        {/* use next/image; 'fill' would require parent relative; here we use fixed w/h via layout props */}
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
