import BackButton from "@/app/components/shared/BackButton";
import Image from "next/image"; 
const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://book-borrowing-platform-psi.vercel.app/bookData.json",
  );
  const books = await res.json();
  const book = books.find((b) => b.id == id);
  //   console.log(book);


  return (
    <div className="container mx-auto">
      <div>
        <div className="flex justify-center items-center mb-4">
          <p className="text-4xl font-bold text-[#763d22] p-4">Details page</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 shadow-2xl m-6 ">
          <div>
            <Image
              src={book.image_url}
              alt={book.title}
              height={500}
              width={400}
              className=" p-6 rounded-lg"
            />
          </div>
          <div className=" text-xl  text-[#763d22] p-12 ">
            <p className="text2xl lg:text-5xl font-bold mb-5">{book.title}</p>
            <p>Writer : {book.author}</p>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-12">
              <p>Category : {book.category}</p>
              <p>Available Copy : {book.available_quantity}</p>
            </div>

            <p className="text-xl">{book.description}</p>
            
             <BackButton/>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
