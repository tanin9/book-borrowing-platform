import BookCard from "@/app/components/shared/BookCard";
import Category from "@/app/components/shared/Category";

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  // console.log(category);

  const res = await fetch(
    "https://book-borrowing-platform-psi.vercel.app/bookData.json",
  );
  const books = await res.json();
  // console.log(books,"books");

  const filteredBooks =
    category ? books.filter( (book) => book.category.toLowerCase() == category.toLowerCase()) : books;

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-5 my-15">
        <div>
          <p className="col-span-1 mt-2 p-5 font-bold text-2xl bg-amber-400">
            Cattagory
          </p>

          <Category />
        </div>
        <div className="col-span-4 ">
          <div className="p-5 mt-2 mb-4 bg-[#763d22] text-[#fdf7eb]">
            <p className=" font-bold text-2xl">All Books</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-4">
            {filteredBooks.map((book) => (
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
