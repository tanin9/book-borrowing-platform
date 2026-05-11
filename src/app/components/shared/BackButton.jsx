"use client";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="btn bg-[#763d22] text-[#fdf7eb] mt-3.5"
      >
        {" "}
        <GoArrowLeft />
        Back
      </button>
    </div>
  );
};

export default BackButton;
