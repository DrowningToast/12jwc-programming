const Location = () => {
  return (
    <div className="px-10 md:px-0 text-white md:flex md:flex-row-reverse md:justify-center md:gap-x-16 ">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl md:text-4xl my-4">ทำนายชะตากับหมอหมึก</h3>
        <p className="text-sm md:text-lg">
          สามารถจองคิวได้ตาม
          <br />
          อีเมล: octopus_fortune@teller.com
          <br />
          โทรศัพท์: 099 XXXX XXX
          <br />
          และมาที่สำนักที่
          <br />
          ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง
          <br />
          แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999
          <br />
          ตามวันเวลาที่นัดไว้
          <br />
          <br />
          จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ
          <br />
          10.00 - 18.30 น. พัก 12.00 - 13.00
          <br />
          เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
          <br />
        </p>
      </div>
      <div className="border-4 border-white w-full h-64 md:w-[410px] md:h-auto md:aspect-square mt-10 mb-5 grid place-items-center text-2xl relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d665.6447144049611!2d100.78101402916333!3d13.73107782596632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb43a76f038c38ca!2sFaculty%20of%20Infomation%20Technology!5e0!3m2!1sen!2sth!4v1655882222518!5m2!1sen!2sth"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
