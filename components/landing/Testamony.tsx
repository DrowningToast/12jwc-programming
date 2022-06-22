import Image from "next/image";
import { FC } from "react";

interface Props {
  name: String;
  testamony: String;
  path: string;
}

const Testamony: FC<Props> = ({ name, testamony, path }) => {
  return (
    <div className="flex flex-col items-center justify-around gap-y-10 my-8">
      <div className="w-48 h-48 border-4 border-white rounded-full relative overflow-hidden">
        <Image src={path ?? ""} layout="fill" objectFit="cover" />
      </div>
      <h2 className="text-3xl">{name ?? "Placeholder Name"}</h2>
      <p className="text-center md:px-8">
        {testamony ?? "Testamony Paragraph"}
      </p>
    </div>
  );
};

export default Testamony;
