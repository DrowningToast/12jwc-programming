import { FC } from "react";
import Image from "next/image";

const History: FC = () => {
  return (
    <div className="flex flex-col items-center justify-around px-8 gap-y-10 md:my-2 md:mt-32 md:justify-between lg:justify-around md:flex-row-reverse md:items-start md:px-16">
      <div className="w-32 h-40 md:w-72 md:h-[360px] border-4 md:border-2 border-white relative">
        <Image src="/assets/port.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="text-white w-full md:w-auto md:py-4 ">
        <h2 className="my-4 text-2xl md:text-4xl">ประวัติหมอหมึก</h2>
        <p className="text-sm md:hidden">
          หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวง
          <br />
          ด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ
          <br />
          ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึก
          <br />
          สามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคล
          <br />
          เพื่อให้ได้ผลลัพธ์ที่แม่นยำที่สุด
        </p>
        <p className="hidden md:inline text-xl">
          หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวง ด้วย
          <br />
          ลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ
          <br /> <br />
          ด้วยความสามารถที่หลากหลาย
          <br />
          ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละ
          <br />
          บุคคล เพื่อให้ได้ผลลัพธ์ที่แม่นยำที่สุด
        </p>
      </div>
    </div>
  );
};

export default History;
