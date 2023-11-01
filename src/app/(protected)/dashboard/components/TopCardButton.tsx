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
    <div className="top-card-button relative rounded-[5px] bg-[#202020]">
      <div className="top-card-button-bg absolute h-full w-full rounded-[5px]" />
      <button
        type="button"
        onClick={cardAction}
        className=" relative flex h-full w-full flex-col items-center justify-center rounded-[5px] py-10 2xl:py-16"
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
    </div>
  );
}
