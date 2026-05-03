import Image from "next/image";
import BookRent from "@/assets/bookrent.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto ">
      <div className="  lg:flex lg:justify-around items-center bg-base-100 shadow-sm">
        <figure className="place-items-center">
          <Image
            src={BookRent}
            alt="Profile Picture"
            height={400}
          />
        </figure>
        <div className=" flex flex-col justify-center items-center lg:items-start lg:mr-17 space-y-4  py-4">
          <p className="text-3xl lg:text-5xl text-[#e37b58] font-bold">
            Find your next Read....
          </p>
          <div className="  ">
            <Link href={"/all-books"}>
              <button className="btn bg-[#e37b58] text-[#fdf7eb]">
                Borrow now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
