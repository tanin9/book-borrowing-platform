import Marquee from "react-fast-marquee";

const TopInformation = () => {
  return (
    <div className="container mx-auto my-6">
      <div className=" bg-[#763d22] text-[#fdf7eb] text-xl  lg:text-4xl  flex items-center px-5">
        <Marquee
          className="lg:h-25"
          pauseOnHover={true}
          speed={40}
        >
          🔥 New Arrivals: ফেলুদা সমগ্র | Special Discount on Memberships - Sign
          Up Today!{" "}
        </Marquee>
      </div>
    </div>
  );
};

export default TopInformation;
