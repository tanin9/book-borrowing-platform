import BookCard from "@/app/components/shared/BookCard";

const AllBooksPage = async () => {
  const res = await fetch(
    "https://book-borrowing-platform-psi.vercel.app/bookData.json",
  );
  const books = await res.json();
  // console.log(books,"books");

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-5 my-15">
        <div className="col-span-1 font-bold text-2xl bg-amber-400">
          Cattagory
        </div>
        <div className="col-span-4 ">
          <div className="p-5 mb-4 bg-[#763d22] text-[#fdf7eb]">
            <p className=" font-bold text-2xl">All Books</p>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
