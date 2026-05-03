const Category = async () => {
  const res = await fetch(
    "https://book-borrowing-platform-psi.vercel.app/category.json",
  );
  const categories = await res.json();
  console.log(categories);

  return <div></div>;
};

export default Category;
