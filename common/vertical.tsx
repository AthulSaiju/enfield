import Image from "next/image";

const Vertical = () => {
  const items = Array(5).fill(0);

  return (
    <div className="flex gap-[36px] opacity-30 ">
      {items.map((_, index) => (
        <div
          key={index}
          className=" flex items-center justify-center bg-[var(--container-bg)] rounded-[20px]"
        >
          <Image
            src="/assets/Group.svg"
            alt={`Group ${index + 1}`}
            className="w-full h-full object-contain"
            width={40}
            height={40}
          />
        </div>
      ))}
    </div>
  );
};

export default Vertical;
