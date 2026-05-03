import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  // console.log(book, "books");

  return (
    <div className=" py-6 flex flex-col justify-center items-center border border-#763d22 space-y-4 rounded-lg bg-[#fdf7eb]">
      <div className="relative p-6">
        <Image
          src={book.image_url}
          alt={book.title}
          height={300}
          width={200}
          className=" rounded-lg"
        />
        <div className="badge badge-soft bg-[#763d22b3] text-[#fdf7eb] absolute top-5 right-5">
          {book.category}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 ">
        <p className="text-[#763d22] text-2xl font-bold"> {book.title}</p>
        <p className="text-md"> {book.author}</p>
      </div>
      <Link href={"/booksDetails/{book.id}"}>
        <button className="btn bg-[#763d22] text-[#fdf7eb]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
