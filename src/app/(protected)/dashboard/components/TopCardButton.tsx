import React from "react";

import Image from "next/image";

type CardData = {
  cardImage: string;
  cardText: string;
  cardAction: () => any;
};

export default function TopCardButton({
  cardImage,
  cardText,
  cardAction,
}: CardData) {
  return (
    <button
      type="button"
      onClick={cardAction}
      className="flex flex-col items-center justify-center rounded-[5px] bg-[#202020] py-10 transition duration-300 hover:bg-[#7B46DE] 2xl:py-16"
    >
      <Image
        src={cardImage}
        alt="connect channel logo"
        width={98}
        height={98}
        className="md:mb-5"
      />
      <h3 className="mt-4 text-[18px] font-semibold">{cardText}</h3>
    </button>
  );
}
