import Image from "next/image"; 
import Reader from "@/assets/groupreader.jpg";
import { GiCheckMark } from "react-icons/gi";
const HowitWorks = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3  p-6">
      <figure className="place-items-center col-span-1">
        <Image
          src={Reader}
          alt="Profile Picture"
          height={500}
          width={500}
        />
      </figure>
      <div className="p-8 lg:col-span-2 flex flex-col justify-center ">
        <h2 className="text-2xl lg:text-3xl text-[#763d22] font-bold mb-6">
          How it Works?
        </h2>

        <div className="text-lg text-[#763d22] lg:w-[90vh] space-y-3 ">
          <div className="flex gap-3 ">
            <GiCheckMark /> 
            <p>
              Create a free account or log in to unlock access to thousands of
              books available for rent near you.
            </p>
          </div>
          <div className="flex gap-3 ">
            <GiCheckMark /> 
            <p>
              Explore our vast library of books across genres — fiction,
              non-fiction, academic, and more. Filter by category, author, or
              availability.
            </p>
          </div>
          <div className="flex gap-3 ">
            <GiCheckMark /> 
            <p>
              Choose the book you want, pick your rental duration, and add it to
              your cart with just one click.
            </p>
          </div>
          <div className="flex gap-3 ">
            <GiCheckMark /> 
            <p>
              Review your selection and complete a quick, secure checkout.
              Choose home delivery or pick up from a nearby location.
            </p>
          </div>

          <div className="flex gap-3 ">
            <GiCheckMark /> 
            <p>
               
              Receive your book and dive in! Return it before the due date to
              avoid any late fees — or extend your rental if you need more time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
