import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className=" text-white h-72 flex flex-col justify-center items-center gap-y-4 md:my-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-7xl">หมอหมึก</h1>
        <h4 className="my-2 md:hidden">
          ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี
          <br />
          พร้อมคำพยากรณ์ที่แม่นยำ
        </h4>
        <h4 className="my-6 text-xl hidden md:inline-block">
          ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
        </h4>
      </div>
      <div className="bg-white px-14 md:px-24 py-4 text-primary cursor-pointer">
        จองคิว
      </div>
    </section>
  );
};

export default Hero;
