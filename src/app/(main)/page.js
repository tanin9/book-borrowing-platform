import BookCard from "../components/shared/BookCard";

const HomePage = async () => {
  const res = await fetch(
    "https://book-borrowing-platform-psi.vercel.app/bookData.json",
  );
  const books = await res.json();
  const topBooks = books.slice(0, 4);
  // console.log(topBooks);

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center items-center my-8 ">
        <p className="font-bold text-2xl lg:text-5xl text-[#763d22]">
          Featured Books
        </p>
      </div>
      <div className="mx-14 grid grid-cols-1 lg:grid-cols-4 gap-5">
        {topBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
