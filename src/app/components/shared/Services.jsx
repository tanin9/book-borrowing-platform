import Image from "next/image";
import HomeLibrary from "@/assets/homeLibrary.jpg";
import Library from "@/assets/locallibrary.jpg";
import MobileLibrary from "@/assets/mobileLibrary.jpg";
const Services = () => {
  return (
    <div className="container mx-auto p-7">
      <div>
        <h1 className="text-4xl font-bold mb-7 flex justify-center items-center">
          OUR SERVICES
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mx-auto ">
        <div className="hidden col-span-1 h-[50vh] w-[30vh]  lg:flex justify-center items-center mx-auto "></div>

        <div className="col-span-1 h-[50vh] w-[30vh] text-[#fdf7eb] bg-amber-700 rounded-2xl flex flex-col justify-center items-center mx-auto p-5">
          <figure className=" place-items-center rounded-2xl">
            <Image
              src={Library}
              alt="Profile Picture"
            />
          </figure>

          <p className=" text-lg font-bold  mt-4">Using Our Library</p>
          <p>
            Access a wide range of books in a quiet and comfortable space where
            you can read and learn easily.
          </p>
        </div>
        <div className="col-span-1 h-[50vh] w-[30vh] text-[#fdf7eb] bg-amber-700 rounded-2xl flex flex-col justify-center items-center mx-auto p-5">
          <figure className=" place-items-center rounded-2xl">
            <Image
              src={HomeLibrary}
              alt="Profile Picture"
            />
          </figure>

          <p className="text-lg font-bold   mt-4">Home Library Service</p>
          <p>
            Rent books online and get them delivered directly to your home for
            easy and convenient reading.
          </p>
        </div>
        <div className="col-span-1 h-[50vh] w-[30vh]  text-[#fdf7eb] bg-amber-700 rounded-2xl flex flex-col justify-center items-center mx-auto p-5">
          <figure className=" place-items-center rounded-2xl">
            <Image
              src={MobileLibrary}
              alt="Profile Picture"
            />
          </figure>

          <p className="text-lg font-bold  mt-4">Mobile Library Service</p>
          <p>
            Borrow and return books from nearby locations through our flexible,
            on-the-go mobile library service.
          </p>
        </div>

        <div className="hidden col-span-1 h-[50vh] w-[30vh]  lg:flex justify-center items-center mx-auto"></div>
      </div>
    </div>
  );
};

export default Services;
