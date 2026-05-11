import Link from "next/link";

const Category = async () => {
  const res = await fetch(
    "https://book-borrowing-platform-psi.vercel.app/category.json",
  );
  const categories = await res.json();
  // console.log(categories);

  return (
    <div>
      <Link href={"/all-books"}>
        <div className="text-[#763d22] font-semibold text-2xl flex flex-col justify-center items-center border-b rounded-2xl p-3 m-4">
          All Books
        </div>
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          <div className="text-[#763d22] font-semibold text-2xl flex flex-col justify-center items-center border-b rounded-2xl p-3 m-4">
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
