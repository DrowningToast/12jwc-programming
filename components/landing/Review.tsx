import { FC } from "react";
import Testamony from "./Testamony";

const testamonies = [
  {
    name: "แมทธิว นักธุรกิจ",
    testamony:
      "หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจ\nได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ",
    src: "/assets/testa1.jpg",
  },
  {
    name: "แจ๊ค นักแสดง",
    testamony:
      "ต้องขอบคุณหมอหมึกในการ\nช่วยให้ความสัมพันธ์\nราบรื่นด้วยนะคะ\nทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ",
    src: "/assets/testa2.jpg",
  },
  {
    name: "น้ำใส นักศึกษา",
    testamony:
      "ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ\nถ้าไม่ได้หมอหมึกมาช่วยไว้ ชีวิตคงแย่เลยค่ะ\nดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา",
    src: "/assets/testa3.jpg",
  },
];

const Review: FC = () => {
  return (
    <div className="my-16 md:my-24 mx-10 font-chakra text-white">
      <h1 className="text-3xl md:text-5xl text-center mt-10">รีวิวจากลูกค้า</h1>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-x-10 items-center justify-start">
        {testamonies.map((testamony, index) => {
          return (
            <Testamony
              key={index}
              path={testamony.src}
              name={testamony.name}
              testamony={testamony.testamony}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;
