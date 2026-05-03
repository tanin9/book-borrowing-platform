
import Image from "next/image";
import Found from "@/assets/notFound.jpg";
import Link from "next/link";

const NotFound = () => {
    return (
      <div className="container mx-auto h-[80vh] flex justify-center items-center flex-col">
        <Image
          src={Found}
          alt="Profile Picture"
          width={300}
          height={300}
        />
        <div className="space-y-5 flex justify-center items-center flex-col">
          <h2 className="font-bold text-5xl text-[#e37b58]">
            This page is not found!
          </h2>

          <Link href={"/"}>
            <button className="btn bg-[#e37b58] text-[#fdf7eb] text-xl p-7 rounded-2xl">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default NotFound;